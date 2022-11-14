import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProductSingle from "./views/ProductSingle";
import Shop from "./views/Shop";
import NotFound from "./views/NotFound";
import Checkout from "./views/Checkout";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import RefreshApi from "./views/RefreshApi";
import { fetchProducts } from "./redux/product/productAction";

function App() {
    const productState = useSelector((state) => state.productState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productState.products.length) dispatch(fetchProducts());
    }, []);

    return (
        <div className="App">
            <HashRouter>
                <div className="root-app.js">
                    <Navbar />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />

                        <Route path="/checkout" element={<Checkout />} />

                        <Route path="shop">
                            <Route index element={<Shop />} />
                            <Route path="product/:id" element={<ProductSingle />} />
                        </Route>

                        <Route path="/404" element={<NotFound />} />
                        <Route path="/refresh" element={<RefreshApi />} />

                        <Route path="*" element={<Navigate replace to="/404" />} />
                    </Routes>
                    <Footer />
                </div>
            </HashRouter>

            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
