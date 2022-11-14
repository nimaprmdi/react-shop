import React from "react";
import { Offcanvas, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, decreaseItem, removeItem } from "../redux/cart/cartAction";

const BasketModal = ({ onHandleClose, show }) => {
    const cartState = useSelector((state) => state.cartState);
    const dispatch = useDispatch();

    return (
        <Offcanvas show={show} onHide={onHandleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartState.selectedItems.length ? (
                    <>
                        <Link to="/checkout" className="btn btn-primary mb-4">
                            Checkout
                        </Link>

                        {cartState.selectedItems.map((cartItem, index) => (
                            <Card className="mb-3" key={index} style={{ width: "100%" }}>
                                <button
                                    type="button"
                                    className="btn btn-danger position-absolute sticky-top rounded mt-2 mx-2 px-2"
                                    onClick={() => dispatch(removeItem(cartItem))}
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
                                    <Card.Text>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => dispatch(decreaseItem(cartItem))}
                                        >
                                            -
                                        </button>
                                        <span className="btn btn-primary mx-2">{cartItem.quantity}</span>

                                        <button className="btn btn-success" onClick={() => dispatch(addItem(cartItem))}>
                                            +
                                        </button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </>
                ) : (
                    <span className="btn btn-warning">No items here</span>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default BasketModal;
