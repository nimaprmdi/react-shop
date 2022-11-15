import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <section className="container my-5">
            <div className="row align-item-cendter">
                <div className="col">
                    <div className="card text-center">
                        <div className="card-header">
                            <p>Payment Successful</p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Thank You!</h2>
                            <p className="card-text">We would like to thank you your order number is 321321654521685</p>
                            <Link to="/" className="btn btn-primary">
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;
