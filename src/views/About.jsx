import React from "react";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="c-about">
            <Navbar />
            <Header />
            <AboutUs />
            <Services />
            <Partners />
            <Footer />
        </div>
    );
};

export default About;
