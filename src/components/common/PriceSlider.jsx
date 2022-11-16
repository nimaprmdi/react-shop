import React from "react";

const PriceSlider = () => {
    return (
        <div className="filter">
            <label className="filter__label">
                <input type="text" className="filter__input" />
            </label>

            <label className="filter__label">
                <input type="text" className="filter__input" />
            </label>

            <div id="sliderPrice" className="filter__slider-price" data-min="0" data-max="100" data-step="5"></div>
        </div>
    );
};

export default PriceSlider;
