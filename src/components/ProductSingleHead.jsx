import React from "react";
import single_img from "../assets/images/product_single_10.jpg";
import single_img_2 from "../assets/images/product_single_01.jpg";
import single_img_3 from "../assets/images/product_single_02.jpg";
import single_img_4 from "../assets/images/product_single_03.jpg";
import single_img_5 from "../assets/images/product_single_04.jpg";
import single_img_6 from "../assets/images/product_single_05.jpg";
import single_img_7 from "../assets/images/product_single_06.jpg";
import { Icon } from "@iconify/react";

const ProductSingleHead = () => {
    return (
        <>
            <div className="card mb-3">
                <img className="card-img img-fluid" src={single_img} alt="Card image cap" id="product-detail" />
            </div>

            <div className="row">
                <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                        <i className="text-dark fas fa-chevron-left">
                            <Icon icon="dashicons:arrow-left-alt2" />
                        </i>
                    </a>
                </div>

                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_2} alt="Product Image 1" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_3} alt="Product Image 2" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_4} alt="Product Image 3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_5} alt="Product Image 4" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_6} alt="Product Image 5" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_7} alt="Product Image 6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_2} alt="Product Image 1" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_3} alt="Product Image 2" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={single_img_4} alt="Product Image 3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                        <i className="text-dark fas fa-chevron-right">
                            <Icon icon="dashicons:arrow-right-alt2" />
                        </i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProductSingleHead;
