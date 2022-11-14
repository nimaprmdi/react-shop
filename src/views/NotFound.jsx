import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const NotFound = ({ jsonData, cart }) => {
    return (
        <>
            <Navbar jsonData={jsonData} />
            <Header jsonData={jsonData} cart={cart} />
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5 text-center">
                        <div className="col-md-8 text-white w-100">
                            <h1>404</h1>
                            <p>This is an ERROR. This page not found</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer jsonData={jsonData} />
        </>
    );
};

export default NotFound;
