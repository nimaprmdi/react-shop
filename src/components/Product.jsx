import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart/cartAction";

const Product = ({ item: itemData, onHandleAddCart }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="c-shop__product-item">
                <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                        <img className="card-img rounded-0 img-fluid" src={itemData.featuredImage} />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                                <li>
                                    <Link
                                        className="btn btn-success text-white mt-2"
                                        to={`/shop/product/${itemData.id}`}
                                    >
                                        <i className="far fa-eye">
                                            <Icon icon="akar-icons:eye" />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <span className="btn btn-success text-white mt-2">
                                        <i
                                            className="fas fa-cart-plus cursor-pointer"
                                            onClick={() => dispatch(addItem(itemData))}
                                        >
                                            <Icon icon="carbon:shopping-cart-plus" />
                                        </i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link className="h3 text-decoration-none" to={`/shop/product/${itemData.id}`}>
                            {itemData.name}
                        </Link>

                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <li>
                                {itemData.sizes.map((size, index) => {
                                    return (
                                        <span key={index}>
                                            {size} {index < itemData.sizes.length - 1 && "/"}
                                        </span>
                                    );
                                })}
                            </li>
                        </ul>

                        <p className="text-left mb-0 mt-2">${itemData.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
