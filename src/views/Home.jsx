import React from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="c-home">
            <Hero />
            <FeaturedCategories />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
