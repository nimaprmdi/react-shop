import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Preloader from "./Preloader";

const Hero = ({ jsonData }) => {
    return (
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {jsonData && jsonData.length > 0 ? (
                    jsonData[0].slider.map((slider, index) => {
                        return (
                            <div className={`carousel-item ${index === 0 && "active"}`} key={index}>
                                <div className="container">
                                    <div className="row p-5">
                                        <>
                                            <>
                                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                                    <img
                                                        className="img-fluid"
                                                        src={slider.image}
                                                        alt={slider.primaryTitle}
                                                    />
                                                </div>
                                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                                    <div className="text-align-left align-self-center">
                                                        <h1 className="h1 text-success">{slider.primaryTitle}</h1>
                                                        <h3 className="h2">{slider.title}</h3>
                                                        <p>{slider.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        </>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <Preloader />
                )}
            </div>
            <a
                className="carousel-control-prev text-decoration-none w-auto ps-3"
                href="#template-mo-zay-hero-carousel"
                role="button"
                data-bs-slide="prev"
            >
                <i className="fas fa-chevron-left">
                    <Icon icon="dashicons:arrow-left-alt2" />
                </i>
            </a>
            <a
                className="carousel-control-next text-decoration-none w-auto pe-3"
                href="#template-mo-zay-hero-carousel"
                role="button"
                data-bs-slide="next"
            >
                <i className="fas fa-chevron-right">
                    <Icon icon="dashicons:arrow-right-alt2" />
                </i>
            </a>
        </div>
    );
};

export default Hero;
