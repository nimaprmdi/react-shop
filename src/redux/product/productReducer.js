const initialStat = {
    loading: false,
    products: {},
    error: "",
};

const productReducer = (state = initialStat, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_PRODUCT_SUCCESS":
            return {
                loading: false,
                products: action.payload,
                error: "",
            };

        case "FETCH_PRODUCT_FAILED":
            return {
                loading: false,
                products: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
