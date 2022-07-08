import React from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = ({ jsonData, cart, setCart }) => {
    return (
        <div className="c-home">
            <Navbar jsonData={jsonData} />
            <Header cart={cart} setCart={setCart} jsonData={jsonData} />
            <Hero jsonData={jsonData} />
            <FeaturedCategories jsonData={jsonData} />
            <FeaturedProducts jsonData={jsonData} />
            <Footer jsonData={jsonData} />
        </div>
    );
};

export default Home;
