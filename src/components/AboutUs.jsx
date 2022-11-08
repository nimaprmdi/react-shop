import React, { useEffect } from "react";
import about_image from "../assets/images/about-hero.svg";

import Preloader from "./Preloader";

const AboutUs = ({ jsonData }) => {
  useEffect(() => {}, [jsonData]);

  return (
    <section className="bg-success py-5">
      <div className="container">
        <div className="row align-items-center py-5">
          {jsonData && jsonData.length > 0 ? (
            <>
              <div className="col-md-8 text-white">
                <h1>About Us</h1>
                <p>{jsonData[0].about.description}</p>
              </div>
              <div className="col-md-4">
                <img src={about_image} alt="About Hero" />
              </div>
            </>
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
