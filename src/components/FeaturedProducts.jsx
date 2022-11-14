import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { Link } from "react-router-dom";
import { filterDatasById, getStarRating } from "../helpers/handleFilter";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
    const [filteredDatas, setFilteredDatas] = useState();
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        setData(productState.products.record);

        data && data[0] && setFilteredDatas(() => filterDatasById(data[0].products.items, data[0].products.featured));
    }, [productState, data]);

    return (
        <section className="bg-light">
            <div className="container py-5">
                {data && data.length > 0 ? (
                    <>
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">Featured Product</h1>
                                <p>
                                    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {filteredDatas &&
                                filteredDatas.map((featuredItem) => {
                                    return (
                                        <div className="col-12 col-md-4 mb-4" key={featuredItem.id}>
                                            <div className="card h-100">
                                                <Link to={`/shop/product/${featuredItem.id}`}>
                                                    <img
                                                        src={featuredItem.featuredImage}
                                                        className="card-img-top"
                                                        alt={featuredItem.name}
                                                    />
                                                </Link>

                                                <div className="card-body">
                                                    <Link
                                                        className="h2 text-decoration-none text-dark"
                                                        to={`/shop/product/${featuredItem.id}`}
                                                    >
                                                        {featuredItem.name}
                                                    </Link>
                                                    <div className="d-block fs-3">
                                                        {getStarRating(featuredItem.rating)}
                                                    </div>
                                                    <p className="card-text">{featuredItem.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </>
                ) : (
                    <Preloader />
                )}
            </div>
        </section>
    );
};

export default FeaturedProducts;
