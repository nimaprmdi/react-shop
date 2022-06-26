import React from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="c-home">
            <Navbar />
            <Header />
            <Hero />
            <FeaturedCategories />
            <FeaturedProducts />
            <Footer />
        </div>
    );
};

export default Home;
