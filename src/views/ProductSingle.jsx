import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductSingleContent from "../components/ProductSingleContent";
import ProductSingleHead from "../components/ProductSingleHead";
import ProductSingleRelated from "../components/ProductSingleRelated";
import { useParams } from "react-router-dom";
import { findDataById } from "../helpers/handleFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductSingle = ({ jsonData, cart, setCart }) => {
    let { id } = useParams();

    const itemData = React.useMemo(() => {
        return jsonData && jsonData.length > 0 && findDataById(jsonData[0].products.items, parseInt(id));
    }, [jsonData, id]);

    const handleAddCart = (item) => {
        const cartItems = jsonData && jsonData.length > 0 && [...jsonData[0].products.items];
        const indexOf = cartItems.indexOf(item);
        setCart([...cart, cartItems[indexOf]]);
        toast.success("Product Added", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    };

    useEffect(() => {}, [jsonData, itemData]);

    return (
        <>
            <Navbar jsonData={jsonData} />
            <Header cart={cart} setCart={setCart} jsonData={jsonData} />

            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <ProductSingleHead itemData={itemData} />
                        </div>

                        <div className="col-lg-7 mt-5">
                            <ProductSingleContent onHandleAddCart={() => handleAddCart(itemData)} itemData={itemData} />
                        </div>
                    </div>
                </div>
            </section>

            <ProductSingleRelated />

            <Footer jsonData={jsonData} />

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
        </>
    );
};

export default ProductSingle;
