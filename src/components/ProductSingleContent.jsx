import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { getStarRating } from "../helpers/handleFilter";

const ProductSingleContent = ({ itemData }) => {
    const [itemCount, setItemCount] = useState(0);

    const handleIncrement = () => {
        setItemCount(itemCount + 1);
    };

    const handleDecrement = () => {
        itemCount !== 0 && setItemCount(itemCount - 1);
    };

    const submit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {}, [itemData]);

    return (
        <div className="card">
            <div className="card-body">
                {itemData && Object.keys(itemData).length > 0 ? (
                    <>
                        <h1 className="h2">{itemData.name}</h1>
                        <p className="h3 py-2">${itemData.price}</p>
                        <p className="py-2">
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <span className="list-inline-item text-dark fs-4">
                                Rating {getStarRating(itemData.rating)}
                            </span>
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>Brand:</h6>
                            </li>
                            <li className="list-inline-item">
                                <p className="text-muted">
                                    <strong>{itemData.brand}</strong>
                                </p>
                            </li>
                        </ul>

                        <h6>Description:</h6>
                        <p>{itemData.description}</p>

                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>Avaliable Color :</h6>
                            </li>

                            {itemData.colors.map((color, index) => {
                                return (
                                    <li key={index} className="list-inline-item">
                                        <p className="text-muted text-capitalize">{color} </p>
                                    </li>
                                );
                            })}
                        </ul>

                        <form action="" method="GET" onSubmit={(e) => submit(e)}>
                            <input type="hidden" name="product-title" value="Activewear" />
                            <div className="row">
                                {/* <div className="col-auto">
                                    <ul className="list-inline pb-3">
                                        <li className="list-inline-item">
                                            Size :
                                            <input type="hidden" name="product-size" id="product-size" value="S" />
                                        </li>

                                        {itemData.sizes.map((size, index) => {
                                            return (
                                                <li key={index} className="list-inline-item">
                                                    <span className="btn btn-success btn-size">{size}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div> */}
                                <div className="col-auto">
                                    <ul className="list-inline pb-3">
                                        <li className="list-inline-item text-right">
                                            Quantity
                                            <input
                                                type="hidden"
                                                name="product-quanity"
                                                id="product-quanity"
                                                value="1"
                                            />
                                        </li>
                                        <li className="list-inline-item">
                                            <button className="btn btn-success" onClick={() => handleDecrement()}>
                                                -
                                            </button>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="badge bg-secondary" id="var-value">
                                                {itemCount}
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <button className="btn btn-success" onClick={() => handleIncrement()}>
                                                +
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg"
                                        name="submit"
                                        value="addtocard"
                                    >
                                        Add To Cart
                                    </button>
                                </div>

                                <div className="col d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg text-capitalize text-white"
                                        name="submit"
                                        value="buy"
                                    >
                                        Add to wish list
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
};

export default ProductSingleContent;
