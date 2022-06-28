import React from "react";
import spinner from "../assets/images/spinner.svg";

const Preloader = ({}) => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center py-5">
                    <img src={spinner} className="w-32" style={{ width: "400px", height: "400px" }} />
                </div>
            </div>
        </section>
    );
};

export default Preloader;
