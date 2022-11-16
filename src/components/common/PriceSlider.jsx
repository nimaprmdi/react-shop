import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterDatasByPrice, getFinalPrice } from "../../helpers/handleFilter";

const PriceSlider = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const [highestPrice, setHighestPrice] = useState(0);

    const productState = useSelector((state) => state.productState);

    useEffect(() => {
        productState &&
            Object.keys(productState.products).length > 0 &&
            setHighestPrice(
                Number(((maxPrice * getFinalPrice(productState.products.record[0].products.items)) / 100).toFixed(0))
            );

        productState &&
            Object.keys(productState.products).length > 0 &&
            console.log(filterDatasByPrice(productState.products.record[0].products.items, minPrice, maxPrice));
    }, [productState, maxPrice]);

    useEffect(() => {
        dragElement(document.getElementById("mydiv"));

        function dragElement(elmnt) {
            var pos1 = 0,
                pos3 = 0;

            let dragItem = null;
            let maxPriceInitialPos = document.querySelector(".max-price").offsetLeft;

            setMaxPrice(parseInt(((maxPriceInitialPos / maxPriceInitialPos) * 100).toFixed(0)));

            document.querySelector(".min-price").addEventListener("mousedown", () => {
                document.querySelector(".min-price").onmousedown = dragMouseDown;
                dragItem = null;
                dragItem = document.querySelector(".min-price");
            });

            document.querySelector(".max-price").addEventListener("mousedown", () => {
                document.querySelector(".max-price").onmousedown = dragMouseDown;
                dragItem = null;
                dragItem = document.querySelector(".max-price");
            });

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos3 = e.clientX;

                dragItem.style.left = dragItem.offsetLeft - pos1 + "px";

                if (dragItem.className === "min-price" && dragItem.offsetLeft - pos1 <= -2) {
                    dragItem.style.left = "0px";
                } else if (dragItem.className === "min-price" && dragItem.offsetLeft - pos1 >= maxPriceInitialPos) {
                    dragItem.style.left = maxPriceInitialPos + "px";
                }

                if (dragItem.className === "max-price" && dragItem.offsetLeft - pos1 >= maxPriceInitialPos) {
                    dragItem.style.left = maxPriceInitialPos + "px";
                } else if (dragItem.className === "max-price" && dragItem.offsetLeft - pos1 <= -2) {
                    dragItem.style.left = "0px";
                }

                dragItem.className === "min-price"
                    ? setMinPrice(Number(((parseInt(dragItem.style.left, 10) / maxPriceInitialPos) * 100).toFixed(0)))
                    : setMaxPrice(Number(((parseInt(dragItem.style.left, 10) / maxPriceInitialPos) * 100).toFixed(0)));
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }, []);
    return (
        <div className="div_parent">
            <div className="d-flex justify-content-between btn btn-primary">
                <span>From ${minPrice}</span>
                <span>Until ${highestPrice}</span>
            </div>

            <div id="mydiv">
                <span className="min-price"></span>
                <span className="bar"></span>
                <span className="max-price"></span>
            </div>
        </div>
    );
};

export default PriceSlider;
