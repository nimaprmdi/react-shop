import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Preloader from "./Preloader";

const Services = ({ jsonData }) => {
    useEffect(() => {}, [jsonData]);

    return (
        <section className="container py-5">
            {jsonData && jsonData.length > 0 ? (
                <>
                    <div className="row text-center pt-5 pb-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">{jsonData[0].about.services.title}</h1>
                            <p>{jsonData[0].about.services.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        {jsonData[0].about.services.icons.map((icon, index) => {
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
