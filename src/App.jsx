import React, { useState, useEffect } from "react";
import store from "./redux/store";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProductSingle from "./views/ProductSingle";
import Shop from "./views/Shop";
import NotFound from "./views/NotFound";
import Checkout from "./views/Checkout";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
    const [jsonData, setJsonData] = useState();

    const getData = () => {
        fetch("https://api.jsonbin.io/v3/b/62b942a5449a1f38211d98f4/latest", {
            headers: {
                "X-Master-Key": "$2b$10$bvY9QBKocZQZ7j.5X1n3ouJw8fqObdDTX9WQFWnXeKY/a7ykQzmwq",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setJsonData(myJson.record);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <div className="root-app.js">
                        <Routes>
                            <Route path="/" element={<Home jsonData={jsonData} />} />
                            <Route path="about" element={<About jsonData={jsonData} />} />
                            <Route path="contact" element={<Contact jsonData={jsonData} />} />

                            <Route path="/checkout" element={<Checkout jsonData={jsonData} />} />

                            <Route path="shop">
                                <Route index element={<Shop jsonData={jsonData} />} />
                                <Route path="product/:id" element={<ProductSingle jsonData={jsonData} />} />
                            </Route>

                            <Route path="/404" element={<NotFound jsonData={jsonData} />} />
                            <Route path="*" element={<Navigate jsonData={jsonData} replace to="/404" />} />
                        </Routes>
                    </div>
                </HashRouter>
            </Provider>

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
