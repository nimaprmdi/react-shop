import { toast } from "react-toastify";

const initalState = {
    selectedItems: [],
    wishLists: [],
    itemCounter: 0,
    priceTotal: 0,
    checkout: false,
};

const sumItems = (items = []) => {
    const itemCounter = items.reduce((total, currentValue) => total + currentValue.quantity, 0);
    const priceTotal = items.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
    return { itemCounter, priceTotal };
};

const conditionReducer = (stateItems = [], payloadItems = {}, condition = () => {}) => {
    if (!stateItems.find((item) => item.id == payloadItems.id)) {
        condition.true();
    } else {
        condition.false();
    }
};

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const addItemCondition = {
                true: () => {
                    state.selectedItems.push({
                        ...action.payload,
                        quantity: 1,
                    });
                },
                false: () => {
                    const itemIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
                    state.selectedItems[itemIndex].quantity++;
                },
            };
            conditionReducer(state.selectedItems, action.payload, addItemCondition);
            toast.success(`${action.payload.name} Added to cart`);
            return { ...state, ...sumItems(state.selectedItems) };

        case "ADD_ITEM_SINGLE":
            const addSingleItemCondition = {
                true: () => {
                    state.selectedItems.push({
                        ...action.payload,
                        quantity: action.payload.quantity,
                    });
                },
                false: () => {
                    const quan = action.payload.quantity;
                    const itemIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
                    state.selectedItems[itemIndex].quantity += quan;
                },
            };
            conditionReducer(state.selectedItems, action.payload, addSingleItemCondition);
            toast.success(`${action.payload.name} Added To Cart`);
            return { ...state, ...sumItems(state.selectedItems) };

        case "ADD_TO_WISH_LIST":
            const wishListCond = {
                true: () => {
                    state.wishLists.push({ ...action.payload });
                    toast.success("Added to wish list");
                },
                false: () => {
                    toast.error("This items is your wish list");
                },
            };
            conditionReducer(state.wishLists, action.payload, wishListCond);
            return { ...state };

        default:
            return state;
    }
};

export default cartReducer;
