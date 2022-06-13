import React from "react";
import Categories from "../components/Categories";
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
            <Categories />
            <FeaturedProducts />
            <Footer />
        </div>
    );
};

export default Home;
