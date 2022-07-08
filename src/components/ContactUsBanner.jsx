import React, { useEffect } from "react";
import Preloader from "./Preloader";

const ContactUsBanner = ({ jsonData }) => {
    useEffect(() => {}, [jsonData]);

    return (
        <div className="container-fluid bg-light py-5">
            <div className="col-md-6 m-auto text-center">
                {jsonData && jsonData.length > 0 ? (
                    <>
                        <h1 className="h1">{jsonData[0].contact.title}</h1>
                        <p>{jsonData[0].contact.description}</p>
                    </>
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
};

export default ContactUsBanner;
