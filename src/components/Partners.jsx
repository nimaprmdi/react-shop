import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const Partners = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);
    return (
        <section className="bg-light py-5">
            <div className="container my-4">
                <div className="row text-center py-3">
                    {data && data[0] ? (
                        <>
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">{data[0].about.partners.title}</h1>
                                <p>{data[0].about.partners.description}</p>
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
                                                        {data[0].about.partners.data.map((icon, index) => {
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
