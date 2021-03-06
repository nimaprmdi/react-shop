import React, { useState, useEffect, createFactory } from "react";
import SearchModal from "./SearchModal";
import BasketModal from "./BasketModal";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { deleteData } from "../helpers/handleFilter";

const Header = ({ jsonData, cart, setCart }) => {
    const [open, setOpen] = useState(false);

    // Basket
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemoveItems = (e) => {
        setCart(deleteData(cart, e));
        console.log(cart);
    };

    useEffect(() => {}, [jsonData, cart]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                        Zay
                    </Link>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                {jsonData &&
                                    jsonData.length > 0 &&
                                    jsonData[0].navigation.map((nav, index) => {
                                        return (
                                            <li className="nav-item" key={index}>
                                                <Link to={nav.address} className="nav-link">
                                                    {nav.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobileSearch"
                                        placeholder="Search ..."
                                    />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                <i className="fa fa-fw fa-search text-dark mr-2">
                                    <Icon icon="fluent:search-16-filled" />
                                </i>
                            </button>

                            <button
                                className="btn nav-icon position-relative text-decoration-none mr-0"
                                onClick={() => handleShow()}
                            >
                                <Icon icon="clarity:shopping-cart-line" />
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                    {cart.length > 0 && cart.length}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <BasketModal
                onHandleRemoveItems={(e) => handleRemoveItems(e)}
                onHandleClose={() => handleClose()}
                show={show}
                cart={cart}
            />

            <SearchModal open={open} setOpen={setOpen} />
        </>
    );
};

export default Header;
