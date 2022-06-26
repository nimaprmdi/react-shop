import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import OurMap from "../components/OurMap";
import ContactUsBanner from "../components/ContactUsBanner";

const Contact = () => {
    return (
        <>
            <Navbar />
            <Header />

            <ContactUsBanner />

            <OurMap />

            <ContactForm />

            <Footer />
        </>
    );
};

export default Contact;
