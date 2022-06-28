import React, { useEffect } from "react";
import Preloader from "../components/Preloader";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = ({ jsonData }) => {
    useEffect(() => {
        jsonData && jsonData.length > 0 && console.log(jsonData[0]);
    }, [jsonData]);

    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                {jsonData && jsonData.length > 0 ? (
                    <>
                        <div className="row">
                            <div className="col-md-4 pt-5">
                                <h2 className="h2 text-success border-bottom pb-3 border-light logo"> {jsonData[0].contact.title}</h2>
                                <ul className="list-unstyled text-light footer-link-list">
                                    <li>
                                        <i className="fas fa-map-marker-alt fa-fw mx-2 my-0">
                                            <Icon icon="fontisto:map-marker-alt" />
                                        </i>
                                        {jsonData[0].contact.address}
                                    </li>
                                    <li>
                                        <i className="fa fa-phone fa-fw  mx-2 my-0">
                                            <Icon icon="carbon:phone-filled" />
                                        </i>
                                        <a className="text-decoration-none" href={`tel:${jsonData[0].contact.phone}`}>
                                            {jsonData[0].contact.phone}
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope fa-fw  mx-2 my-0">
                                            <Icon icon="ic:sharp-mail" />
                                        </i>
                                        <a className="text-decoration-none" href={`mailto:${jsonData[0].contact.email}`}>
                                            {jsonData[0].contact.email}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 pt-5">
                                <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                                <ul className="list-unstyled text-light footer-link-list">
                                    {jsonData[0].products.category.items.map((cat) => {
                                        return (
                                            <li key={cat.id}>
                                                <Link className="text-decoration-none text-capitalize" to={cat.name}>
                                                    {cat.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="col-md-4 pt-5">
                                <h2 className="h2 text-light border-bottom pb-3 border-light">Navigation</h2>
                                <ul className="list-unstyled text-light footer-link-list">
                                    {jsonData[0].navigation.map((nav, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={nav.address} className="text-decoration-none">
                                                    {nav.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="row text-light mb-4">
                            <div className="col-12 mb-3">
                                <div className="w-100 my-3 border-top border-light"></div>
                            </div>
                            <div className="col-auto me-auto">
                                <ul className="list-inline text-left footer-icons">
                                    {jsonData[0].contact.socials.map((social) => {
                                        return (
                                            <li key={social.name} className="list-inline-item border border-light rounded-circle text-center">
                                                <a className="text-light text-decoration-none" target="_blank" href={social.address}>
                                                    <Icon icon={social.icon} />
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="subscribeEmail">
                                    Email address
                                </label>
                                <div className="input-group mb-2">
                                    <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                    <div className="input-group-text btn-success text-light">Subscribe</div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Preloader />
                )}
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Converted to React By{" "}
                                <a rel="sponsored" href="https://nimapm.com" target="_blank">
                                    NimaPm
                                </a>{" "}
                                | Designed by{" "}
                                <a rel="sponsored" href="https://templatemo.com" target="_blank">
                                    TemplateMo Free Themes
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
