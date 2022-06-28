import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { Icon } from "@iconify/react";
import { filterDatasById } from "../helpers/handleFilter";

const FeaturedProducts = ({ jsonData }) => {
    const [filteredDatas, setFilteredDatas] = useState();

    useEffect(() => {
        jsonData && jsonData.length > 0 && setFilteredDatas(() => filterDatasById(jsonData[0].products.items, jsonData[0].products.featured));
    }, [jsonData]);

    return (
        <section className="bg-light">
            <div className="container py-5">
                {jsonData && jsonData.length > 0 ? (
                    <>
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">Featured Product</h1>
                                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="row">
                            {filteredDatas &&
                                filteredDatas.map((featuredItem) => {
                                    return (
                                        <div className="col-12 col-md-4 mb-4" key={featuredItem.id}>
                                            <div className="card h-100">
                                                <a href="shop-single.html">
                                                    <img src={featuredItem.featuredImage} className="card-img-top" alt={featuredItem.name} />
                                                </a>
                                                <div className="card-body">
                                                    <ul className="list-unstyled d-flex justify-content-between">
                                                        <li>
                                                            <i className="text-warning fa fa-star">
                                                                <Icon icon="bi:star-fill" />
                                                            </i>
                                                            <i className="text-warning fa fa-star">
                                                                <Icon icon="bi:star-fill" />
                                                            </i>
                                                            <i className="text-warning fa fa-star">
                                                                <Icon icon="bi:star-fill" />
                                                            </i>
                                                            <i className="text-muted fa fa-star">
                                                                <Icon icon="bi:star" />
                                                            </i>
                                                            <i className="text-muted fa fa-star">
                                                                <Icon icon="bi:star" />
                                                            </i>
                                                        </li>
                                                        <li className="text-muted text-right">{featuredItem.price}$</li>
                                                    </ul>
                                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">
                                                        {featuredItem.name}
                                                    </a>
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
