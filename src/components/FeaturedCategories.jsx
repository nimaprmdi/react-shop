import React, { useEffect } from "react";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";

const FeaturedCategories = ({ jsonData }) => {
    useEffect(() => {
        console.log(jsonData);
    }, [jsonData]);

    return (
        <section className="container py-5">
            {jsonData && jsonData.length > 0 ? (
                <>
                    <div className="row text-center pt-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">{jsonData[0].products.category.title}</h1>
                            <p>{jsonData[0].products.category.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        {jsonData[0].products.category.items.map((cat) => {
                            return (
                                <div className="col-12 col-md-4 p-5 mt-3" key={cat.id}>
                                    <Link to={`/shop/?category=${cat.name}`}>
                                        <img src={cat.image} className="rounded-circle img-fluid border" />
                                    </Link>

                                    <h5 className="text-center mt-3 mb-3">{cat.name}</h5>
                                    <p className="text-center">
                                        <Link className="btn btn-success" to={`/shop/?category=${cat.name}`}>
                                            Go Shop
                                        </Link>
                                    </p>
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

export default FeaturedCategories;
