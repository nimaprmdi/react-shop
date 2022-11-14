import React, { useEffect, useState } from "react";
import ProductSingleContent from "../components/ProductSingleContent";
import ProductSingleHead from "../components/ProductSingleHead";
import ProductSingleRelated from "../components/ProductSingleRelated";
import { useParams } from "react-router-dom";
import { findDataById } from "../helpers/handleFilter";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const ProductSingle = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);
    let { id } = useParams();

    const itemData = React.useMemo(() => {
        return data && data[0] && findDataById(data[0].products.items, parseInt(id));
    }, [data, id]);

    useEffect(() => {
        setData(productState.products.record);
    }, [productState, data]);

    return (
        <>
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
        </>
    );
};

export default ProductSingle;
