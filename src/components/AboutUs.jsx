import React, { useEffect, useState } from "react";
import about_image from "../assets/images/about-hero.svg";
import Preloader from "./Preloader";
import { useSelector } from "react-redux";

const AboutUs = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);

    return (
        <section className="bg-success py-5">
            <div className="container">
                <div className="row align-items-center py-5">
                    {data && data[0] ? (
                        <>
                            <div className="col-md-8 text-white">
                                <h1>About Us</h1>
                                <p>{data[0].about.description}</p>
                            </div>
                            <div className="col-md-4">
                                <img src={about_image} alt="About Hero" />
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

export default AboutUs;
