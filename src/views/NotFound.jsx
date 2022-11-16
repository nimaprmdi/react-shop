import React, { useEffect } from "react";

const NotFound = () => {
    return (
        <>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5 text-center">
                        <div className="col-md-8 text-white w-100">
                            <h1>404</h1>
                            <p>
                                This is an ERROR. This page not found. <br />
                                This is an error the page that you are looking for can not be found
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
