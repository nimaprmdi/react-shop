import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductSingleContent from "../components/ProductSingleContent";
import ProductSingleHead from "../components/ProductSingleHead";
import ProductSingleRelated from "../components/ProductSingleRelated";

const ProductSingle = () => {
    return (
        <>
            <Navbar />
            <Header />

            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <ProductSingleHead />
                        </div>

                        <div className="col-lg-7 mt-5">
                            <ProductSingleContent />
                        </div>
                    </div>
                </div>
            </section>

            <ProductSingleRelated />

            <Footer />
        </>
    );
};

export default ProductSingle;
