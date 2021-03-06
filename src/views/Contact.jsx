import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import OurMap from "../components/OurMap";
import ContactUsBanner from "../components/ContactUsBanner";

const Contact = ({ jsonData, cart, setCart }) => {
    useEffect(() => {}, [jsonData]);
    return (
        <>
            <Navbar jsonData={jsonData} />
            <Header cart={cart} setCart={setCart} jsonData={jsonData} />

            <ContactUsBanner jsonData={jsonData} />

            <OurMap jsonData={jsonData} />

            <ContactForm />

            <Footer jsonData={jsonData} />
        </>
    );
};

export default Contact;
