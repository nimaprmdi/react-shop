import http from "../../services/httpService";

const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCT_REQUEST",
    };
};

const fetchProductSuccess = (products) => {
    return {
        type: "FETCH_PRODUCT_SUCCESS",
        payload: products,
    };
};

const fetchProductsFailed = (products) => {
    return {
        type: "FETCH_PRODUCT_FAILED",
        payload: products,
    };
};

const getHeaders = () => {
    return {
        "X-Master-Key": "$2b$10$bvY9QBKocZQZ7j.5X1n3ouJw8fqObdDTX9WQFWnXeKY/a7ykQzmwq",
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());

        http.get("/latest", {
            headers: getHeaders(),
        })
            .then((response) => {
                const products = response.data;
                dispatch(fetchProductSuccess(products));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchProductsFailed(errorMsg));
            });
    };
};
