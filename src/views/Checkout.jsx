import React, { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addItem, decreaseItem } from "../redux/cart/cartAction";

const Checkout = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartState);
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col bg-success">
                        {cartState.selectedItems.length ? (
                            <>
                                <button className="btn btn-warning mt-5">Clear All Items</button>
                                <button className="btn btn-primary mx-3 mt-5">Finall Payment (Stripe)</button>
                                {cartState.selectedItems.map((item) => (
                                    <div key={item.id} className="card my-5">
                                        <div className="card-header">Header</div>

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

                                                <button
                                                    onClick={() => dispatch(decreaseItem(item))}
                                                    className="btn btn-danger"
                                                >
                                                    -
                                                </button>

                                                <button className="btn btn-primary mx-2">{item.quantity}</button>

                                                <button
                                                    className="btn btn-primary"
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
