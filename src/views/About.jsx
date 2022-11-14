import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Partners from "../components/Partners";
import Services from "../components/Services";

const About = () => {
    return (
        <div className="c-about">
            <AboutUs />
            <Services />
            <Partners />
        </div>
    );
};

export default About;
