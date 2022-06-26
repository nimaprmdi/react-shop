import React from "react";
import { Icon } from "@iconify/react";
import { Accordion } from "react-bootstrap";

import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const Categories = () => {
    return (
        <div className="c-categories">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
                <Accordion
                // defaultActiveKey={["0"]}
                //alwaysOpen
                >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="collapsed d-flex justify-content-between h3 text-decoration-none">Gender</Accordion.Header>
                        <Accordion.Body className="list-unstyled pl-3">
                            <ul className="">
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Women
                                    </a>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="collapsed d-flex justify-content-between h3 text-decoration-none">Sale</Accordion.Header>
                        <Accordion.Body className="list-unstyled pl-3">
                            <ul className="">
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Sport
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Luxury
                                    </a>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="collapsed d-flex justify-content-between h3 text-decoration-none">Products</Accordion.Header>
                        <Accordion.Body className="list-unstyled pl-3">
                            <ul className="">
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Bag
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Sweather
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Sunglass
                                    </a>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>
        </div>
    );
};

export default Categories;
