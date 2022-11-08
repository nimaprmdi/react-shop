import React, { useState, useEffect } from "react";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProductSingle from "./views/ProductSingle";
import Shop from "./views/Shop";
import NotFound from "./views/NotFound";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";

function App() {
  const [jsonData, setJsonData] = useState();

  const [cart, setCart] = useState([]);

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

    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <HashRouter>
        <div className="root-app.js">
          <Routes>
            <Route path="/" element={<Home jsonData={jsonData} cart={cart} setCart={setCart} />} />
            <Route path="about" element={<About jsonData={jsonData} cart={cart} setCart={setCart} />} />
            <Route path="contact" element={<Contact jsonData={jsonData} cart={cart} setCart={setCart} />} />

            <Route path="shop">
              <Route index element={<Shop jsonData={jsonData} cart={cart} setCart={setCart} />} />
              <Route path="product/:id" element={<ProductSingle jsonData={jsonData} cart={cart} setCart={setCart} />} />
            </Route>

            <Route path="/404" element={<NotFound jsonData={jsonData} cart={cart} setCart={setCart} />} />
            <Route
              path="*"
              element={<Navigate jsonData={jsonData} replace to="/404" cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
