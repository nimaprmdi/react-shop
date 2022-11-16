import React, { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addItem, decreaseItem, clearAll } from "../redux/cart/cartAction";
import axios from "axios";

const Checkout = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartState);
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);

    const checkout = async () => {
        await axios
            .post(
                "https://floating-depths-69711.herokuapp.com/checkout",
                { items: cartState.selectedItems },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                if (response.data.url) {
                    window.location.assign(response.data.url);
                }
            });
    };

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col bg-success">
                        {cartState.selectedItems.length ? (
                            <>
                                <div>
                                    <button className="btn btn-warning mt-5" onClick={() => dispatch(clearAll())}>
                                        Clear All Items
                                    </button>

                                    <span className="btn btn-info mt-5 mx-3">
                                        {cartState.itemCounter} Total Products
                                    </span>

                                    <span className="btn btn-info mt-5">${cartState.priceTotal} Total Price</span>

                                    <button onClick={checkout} className="btn btn-primary mt-5 mx-3">
                                        Checkout
                                    </button>
                                </div>

                                {cartState.selectedItems.map((item, index) => (
                                    <div key={item.id} className="card my-5">
                                        <div className="card-header">Item {++index}</div>

                                        <div
                                            className="card-body "
                                            style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                                        >
                                            <img
                                                className="card-img"
                                                style={{ width: "200px", display: "block" }}
                                                src={item.featuredImage}
                                                alt="Shoes"
                                            />

                                            <div style={{ width: "calc(100% - 216px)" }}>
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.description}</p>

                                                <div className="mb-4">
                                                    <button className="btn btn-primary">${item.price}</button>
                                                </div>

                                                <button
                                                    onClick={() => dispatch(decreaseItem(item))}
                                                    className="btn btn-danger"
                                                >
                                                    -
                                                </button>

                                                <button className="btn btn-primary mx-2">{item.quantity}</button>

                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => dispatch(addItem(item))}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <Modal />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
