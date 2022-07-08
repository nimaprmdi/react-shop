import React, { useEffect, useState } from "react";
import { Offcanvas, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

const BasketModal = ({ cart, onHandleClose, onHandleRemoveItems, show }) => {
    useEffect(() => {
        console.log("cart", cart);
    }, [cart, show]);

    return (
        <Offcanvas show={show} onHide={onHandleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart &&
                    cart.length > 0 &&
                    cart.map((cartItem, index) => {
                        return (
                            <Card className="mb-3" key={index} style={{ width: "100%" }}>
                                <button
                                    type="button"
                                    className="btn btn-danger position-absolute sticky-top rounded mt-2 mx-2 px-2"
                                    onClick={() => onHandleRemoveItems(cartItem)}
                                >
                                    <Icon icon="ant-design:close-outlined" />
                                </button>

                                <Card.Img
                                    style={{ maxHeight: "200px", objectFit: "cover" }}
                                    variant="top"
                                    src={cartItem.featuredImage}
                                />
                                <Card.Body>
                                    <Card.Title>{cartItem.name}</Card.Title>
                                    <Card.Text>{cartItem.description}</Card.Text>
                                    <Card.Text>${cartItem.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default BasketModal;
