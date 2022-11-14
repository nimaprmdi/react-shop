import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

const Services = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);

    return (
        <section className="container py-5">
            {data && data[0] ? (
                <>
                    <div className="row text-center pt-5 pb-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">{data[0].about.services.title}</h1>
                            <p>{data[0].about.services.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        {data[0].about.services.icons.map((icon, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-3 pb-5">
                                    <div className="h-100 py-5 services-icon-wap shadow">
                                        <div className="h1 text-success text-center">
                                            <i className="fa fa-truck fa-lg">
                                                <Icon icon={icon.itemIcon} />
                                            </i>
                                        </div>
                                        <h2 className="h5 mt-4 text-center">{icon.title}</h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <Preloader />
            )}
        </section>
    );
};

export default Services;
