import React, { useEffect } from "react";
import brand_1 from "../assets/images/brand_01.png";
import brand_2 from "../assets/images/brand_02.png";
import brand_3 from "../assets/images/brand_03.png";
import brand_4 from "../assets/images/brand_04.png";
import Preloader from "./Preloader";
import { Icon } from "@iconify/react";

const Partners = ({ jsonData }) => {
    useEffect(() => {}, [jsonData]);
    return (
        <section className="bg-light py-5">
            <div className="container my-4">
                <div className="row text-center py-3">
                    {jsonData && jsonData.length > 0 ? (
                        <>
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">{jsonData[0].about.partners.title}</h1>
                                <p>{jsonData[0].about.partners.description}</p>
                            </div>
                            <div className="col-lg-9 m-auto tempaltemo-carousel">
                                <div className="row d-flex flex-row">
                                    <div className="col-1 align-self-center">
                                        <a
                                            className="h1"
                                            href="#templatemo-slide-brand"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <i className="text-light fas fa-chevron-left"></i>
                                        </a>
                                    </div>

                                    <div className="col">
                                        <div
                                            className="carousel slide carousel-multi-item pt-2 pt-md-0"
                                            id="templatemo-slide-brand"
                                            data-bs-ride="carousel"
                                        >
                                            <div className="carousel-inner product-links-wap" role="listbox">
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        {jsonData[0].about.partners.data.map((icon, index) => {
                                                            return (
                                                                <div key={index} className="col-3 p-md-5">
                                                                    <span className="img-fluid brand-img">
                                                                        <Icon className="fs-huge" icon={icon.icon} />
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-1 align-self-center">
                                        <a
                                            className="h1"
                                            href="#templatemo-slide-brand"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <i className="text-light fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Preloader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Partners;
