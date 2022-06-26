import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import product_img from "../assets/images/shop_01.jpg";
import Product from "../components/Product";

const Shop = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <Categories />
                    </div>

                    <div className="col-lg-9">
                        <div className="c-shop__products">
                            <div className="c-shop__header d-flex">
                                <div className="col-md-6">
                                    <ul className="list-inline shop-top-menu pb-3 pt-1">
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none mr-3" href="#">
                                                All
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none mr-3" href="#">
                                                Men's
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none" href="#">
                                                Women's
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <select className="form-control">
                                            <option>Featured</option>
                                            <option>A to Z</option>
                                            <option>Item</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="c-shop__product-items d-flex flex-wrap justify-content-between">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>

                        <div className="c-shop__pagination row mt-2">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex="-1">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">
                                        3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shop;
