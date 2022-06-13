import React from "react";
import brand_1 from "../assets/images/brand_01.png";
import brand_2 from "../assets/images/brand_02.png";
import brand_3 from "../assets/images/brand_03.png";
import brand_4 from "../assets/images/brand_04.png";

const Partners = () => {
    return (
        <section class="bg-light py-5">
            <div class="container my-4">
                <div class="row text-center py-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">Our Brands</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="col-lg-9 m-auto tempaltemo-carousel">
                        <div class="row d-flex flex-row">
                            <div class="col-1 align-self-center">
                                <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                    <i class="text-light fas fa-chevron-left"></i>
                                </a>
                            </div>

                            <div class="col">
                                <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                                    <div class="carousel-inner product-links-wap" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_1} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_2} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_3} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_4} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_1} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_2} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_3} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_4} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_1} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_2} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_3} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#">
                                                        <img class="img-fluid brand-img" src={brand_4} alt="Brand Logo" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-1 align-self-center">
                                <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                    <i class="text-light fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
