import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Footer from "../components/Footer";

const About = ({ jsonData }) => {
    useEffect(() => {}, [jsonData]);

    return (
        <div className="c-about">
            <Navbar jsonData={jsonData} />
            <Header jsonData={jsonData} />
            <AboutUs jsonData={jsonData} />
            <Services jsonData={jsonData} />
            <Partners jsonData={jsonData} />
            <Footer jsonData={jsonData} />
        </div>
    );
};

export default About;
