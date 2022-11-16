import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
    return (
        <section className="container my-5">
            <div className="row align-item-cendter">
                <div className="col">
                    <div className="card text-center">
                        <div className="card-header">
                            <p>Payment Failed</p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Payment Was Not Successful</h2>
                            <p className="card-text">You can use nav menu to reach other parts of the website</p>
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

export default Cancel;
