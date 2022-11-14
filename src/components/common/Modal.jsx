import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
    return (
        <div className="card my-5">
            <h5 className="card-header">No items in cart</h5>
            <div className="card-body">
                <h5 className="card-title">You dont have any item in your cart</h5>
                <p className="card-text">Please go shopping</p>
                <Link to="/shop" className="btn btn-primary">
                    Go to shop
                </Link>
            </div>
        </div>
    );
};

export default Modal;
