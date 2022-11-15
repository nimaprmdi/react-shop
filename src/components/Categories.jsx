import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categories = ({ searchParams, setSearchParams }) => {
    const [data, setData] = useState();
    const productState = useSelector((state) => state.productState);

    const handleClick = (cat) => {
        setSearchParams({ ...searchParams, category: cat.name });
        let updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set("category", cat.name);
        setSearchParams(updatedSearchParams.toString());
    };

    useEffect(() => {
        setData(productState.products.record);
    }, [data, productState]);

    return (
        <div className="c-categories">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
                <Accordion
                // defaultActiveKey={["0"]}
                //alwaysOpen
                >
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="collapsed d-flex justify-content-between h3 text-decoration-none">
                            Products
                        </Accordion.Header>
                        <Accordion.Body className="list-unstyled pl-3">
                            <ul>
                                <li>
                                    <Link className="text-decoration-none text-capitalize" to={`/shop`}>
                                        All
                                    </Link>
                                </li>

                                {data &&
                                    data[0] &&
                                    data[0].products.category.items.map((cat, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    onClick={() => handleClick(cat)}
                                                    className="text-decoration-none text-capitalize cursor-pointer"
                                                >
                                                    {cat.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>
        </div>
    );
};

export default Categories;
