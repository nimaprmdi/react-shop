import React from "react";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProductSingle from "./views/ProductSingle";
import Shop from "./views/Shop";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="root-app.js">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="about" element={<About />} />
                        <Route path="produt" element={<ProductSingle />} />
                        <Route path="contact" element={<Contact />} />

                        {/* <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate replace to="/404" />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>

            {/* <Home /> */}

            {/* <About /> */}

            {/* <Shop /> */}

            {/* <ProductSingle /> */}

            {/* <Contact /> */}
        </div>
    );
}

export default App;
