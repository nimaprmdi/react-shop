import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Accordion } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

const Categories = ({ jsonData }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    for (const entry of searchParams.keys()) {
        // console.log(entry);
    }
    const handleClick = (searchCat) => {
        // setSearchParams({ category: searchCat });
    };

    useEffect(() => {}, [jsonData]);

    return (
        <div className="c-categories">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
                <Accordion
                // defaultActiveKey={["0"]}
                //alwaysOpen
                >
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="collapsed d-flex justify-content-between h3 text-decoration-none">Products</Accordion.Header>
                        <Accordion.Body className="list-unstyled pl-3">
                            <ul>
                                <li>
                                    <Link className="text-decoration-none text-capitalize" to={`/shop`}>
                                        All
                                    </Link>
                                </li>

                                {jsonData &&
                                    jsonData.length > 0 &&
                                    jsonData[0].products.category.items.map((cat, index) => {
                                        return (
                                            <li key={index}>
                                                <Link onClick={() => handleClick(cat.name)} className="text-decoration-none text-capitalize" to={`/shop/?category=${cat.name}`}>
                                                    {cat.name}
                                                </Link>
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
