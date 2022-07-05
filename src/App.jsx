import React, { useState, useEffect } from "react";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProductSingle from "./views/ProductSingle";
import Shop from "./views/Shop";
import NotFound from "./views/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
            <BrowserRouter>
                <div className="root-app.js">
                    <Routes>
                        <Route path="/" element={<Home jsonData={jsonData} />} />
                        <Route path="about" element={<About jsonData={jsonData} />} />
                        <Route path="contact" element={<Contact jsonData={jsonData} />} />

                        <Route path="shop">
                            <Route index element={<Shop jsonData={jsonData} />} />
                            <Route path="product/:id" element={<ProductSingle jsonData={jsonData} />} />
                        </Route>

                        <Route path="/404" element={<NotFound jsonData={jsonData} />} />
                        <Route path="*" element={<Navigate jsonData={jsonData} replace to="/404" />} />
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
