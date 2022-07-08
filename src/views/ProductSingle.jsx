import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductSingleContent from "../components/ProductSingleContent";
import ProductSingleHead from "../components/ProductSingleHead";
import ProductSingleRelated from "../components/ProductSingleRelated";
import { useParams } from "react-router-dom";
import { findDataById } from "../helpers/handleFilter";

const ProductSingle = ({ jsonData, cart, setCart }) => {
    let { id } = useParams();

    const itemData = React.useMemo(() => {
        return jsonData && jsonData.length > 0 && findDataById(jsonData[0].products.items, parseInt(id));
    }, [jsonData, id]);

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
                            <ProductSingleContent itemData={itemData} />
                        </div>
                    </div>
                </div>
            </section>

            <ProductSingleRelated />

            <Footer jsonData={jsonData} />
        </>
    );
};

export default ProductSingle;
