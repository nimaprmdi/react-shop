const addItem = (items = {}) => {
    return {
        type: "ADD_ITEM",
        payload: items,
    };
};

const decreaseItem = (items = {}) => {
    return {
        type: "DECREASE_ITEM",
        payload: items,
    };
};

const addItemSingle = (items = {}) => {
    return {
        type: "ADD_ITEM_SINGLE",
        payload: items,
    };
};

const addToWishList = (items = {}) => {
    return {
        type: "ADD_TO_WISH_LIST",
        payload: items,
    };
};

const removeItem = (items = {}) => {
    return {
        type: "REMOVE_ITEM",
        payload: items,
    };
};

const clearAll = () => {
    return {
        type: "CLEAR_ALL",
    };
};

export { addItem, decreaseItem, addItemSingle, addToWishList, removeItem, clearAll };
