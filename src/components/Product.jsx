import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import product_img from "../assets/images/shop_01.jpg";

const Product = ({ item: itemData }) => {
    useEffect(() => {}, [itemData]);

    return (
        <div className="c-shop__product-item">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={product_img} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li>
                                <a className="btn btn-success text-white" href="shop-single.html">
                                    <i className="far fa-heart">
                                        <Icon icon="ci:heart-fill" />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a className="btn btn-success text-white mt-2" href="shop-single.html">
                                    <i className="far fa-eye">
                                        <Icon icon="akar-icons:eye" />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a className="btn btn-success text-white mt-2" href="shop-single.html">
                                    <i className="fas fa-cart-plus">
                                        <Icon icon="carbon:shopping-cart-plus" />
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <a href="shop-single.html" className="h3 text-decoration-none">
                        {itemData.name}
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>M/L/X/XL</li>
                        <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="text-center mb-0">$250.00</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
