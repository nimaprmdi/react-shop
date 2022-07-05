import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { Icon } from "@iconify/react";

const ProductSingleHead = ({ itemData }) => {
    const [currentImage, setCurrentImage] = useState();

    const handleImageChange = (slide) => {
        setCurrentImage(slide);
    };

    useEffect(() => {
        itemData && Object.keys(itemData).length > 0 && setCurrentImage(itemData.featuredImage);
    }, [itemData]);

    return itemData && Object.keys(itemData).length > 0 ? (
        <>
            <div className="card mb-3">
                <img className="card-img img-fluid" src={currentImage} alt={itemData.name.toLowerCase().replace(/ /g, "-")} id="product-detail" />
            </div>

            <div className="row">
                {itemData.sliderImages.map((slide, index) => {
                    return (
                        <div key={("slider", index)} className="col-3 mb-3">
                            <img onClick={() => handleImageChange(slide)} className="card-img img-fluid cursor-pointer" src={slide} alt="Product Image 1" />
                        </div>
                    );
                })}
            </div>
        </>
    ) : (
        <Preloader />
    );
};

export default ProductSingleHead;
