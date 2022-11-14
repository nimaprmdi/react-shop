import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";

const ContactUsBanner = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);
    return (
        <div className="container-fluid bg-light py-5">
            <div className="col-md-6 m-auto text-center">
                {data && data[0] ? (
                    <>
                        <h1 className="h1">{data[0].contact.title}</h1>
                        <p>{data[0].contact.description}</p>
                    </>
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
};

export default ContactUsBanner;
