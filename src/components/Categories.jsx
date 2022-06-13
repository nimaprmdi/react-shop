import React from "react";
import img_cat_1 from "../assets/images/category_img_01.jpg";
import img_cat_2 from "../assets/images/category_img_02.jpg";
import img_cat_3 from "../assets/images/category_img_03.jpg";

const Categories = () => {
    return (
        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Categories of The Month</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#">
                        <img src={img_cat_1} className="rounded-circle img-fluid border" />
                    </a>
                    <h5 className="text-center mt-3 mb-3">Watches</h5>
                    <p className="text-center">
                        <a className="btn btn-success">Go Shop</a>
                    </p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#">
                        <img src={img_cat_2} className="rounded-circle img-fluid border" />
                    </a>
                    <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                    <p className="text-center">
                        <a className="btn btn-success">Go Shop</a>
                    </p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#">
                        <img src={img_cat_3} className="rounded-circle img-fluid border" />
                    </a>
                    <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                    <p className="text-center">
                        <a className="btn btn-success">Go Shop</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Categories;
