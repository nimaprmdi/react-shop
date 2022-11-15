import React, { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addItem, decreaseItem, clearAll } from "../redux/cart/cartAction";

const Checkout = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartState);
    const productState = useSelector((state) => state.productState);

    const x = [
        { id: "price_1M4IJoAU2FGxqbUAQG4ZZuOM", quantity: 3, price: 50.0 },
        { id: "price_1M4IL3AU2FGxqbUAVPJjP2DS", quantity: 1, price: 30.0 },
    ];

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);

    const checkout = async () => {
        await fetch("http://localhost:4000/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: cartState.selectedItems,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.url) {
                    window.location.assign(response.url);
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
