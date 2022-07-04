import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Preloader from "../components/Preloader";
import ProductsSorting from "../components/ProductsSorting";
import { useSearchParams } from "react-router-dom";
import { filterDatasByCats, sortDataAtoZ, sortDataZtoA, shuffleData } from "../helpers/handleFilter";

const Shop = ({ jsonData }) => {
    const [selectSortingData, setSelectSortingData] = useState();

    const [searchParams, setSearchParams] = useSearchParams();
    let cats = searchParams.get("category");
    let sorting = searchParams.get("sorting");

    const handleSorting = (sorting, data) => {
        switch (sorting) {
            case "a-to-z":
                return data && data.length > 0 && sortDataAtoZ(data);
                break;
            case "z-to-a":
                return data && data.length > 0 && sortDataZtoA(data);
                break;
            case "featured":
                return data && data.length > 0 && sortDataZtoA(data);
                break;
            case "random":
                return data && data.length > 0 && shuffleData(data);
                break;
            case "all":
                return data && data.length > 0 && data;
                break;
            default:
                return data && data.length > 0 && data;
        }
    };

    const dataItems = React.useMemo(() => {
        if (!cats) {
            if (sorting) {
                return jsonData && jsonData.length > 0 && handleSorting(sorting, jsonData[0].products.items);
            } else {
                return jsonData && jsonData.length > 0 && jsonData[0].products.items;
            }
        } else {
            let filteredCats = jsonData && jsonData.length > 0 && filterDatasByCats(jsonData[0].products.items, cats);

            if (sorting) {
                return jsonData && jsonData.length > 0 && handleSorting(sorting, filteredCats);
            } else {
                return jsonData && jsonData.length > 0 && filteredCats;
            }
        }
    }, [cats, sorting, jsonData]);

    useEffect(() => {
        // jsonData && jsonData.length > 0 && console.log(jsonData[0]);
    }, [jsonData, sorting, cats]);

    return (
        <>
            <Navbar jsonData={jsonData} />
            <Header jsonData={jsonData} />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <Categories searchParams={searchParams} setSearchParams={setSearchParams} jsonData={jsonData} />
                    </div>

                    <div className="col-lg-9">
                        <div className="c-shop__products">
                            <div className="c-shop__header d-flex mb-4">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <ProductsSorting searchParams={searchParams} setSearchParams={setSearchParams} />
                                    </div>
                                </div>
                            </div>

                            <div className="c-shop__product-items d-flex flex-wrap justify-content-start">
                                {console.log(dataItems)}
                                {dataItems && dataItems.length > 0 ? (
                                    dataItems.map((item, index) => {
                                        return <Product key={index} item={item} />;
                                    })
                                ) : (dataItems && dataItems.length == 0) || dataItems === false ? (
                                    <section className="py-5 w-100">
                                        <div className="container">
                                            <div className="row align-items-center py-5 text-center">
                                                <div className="col-md-8 text-black w-100">
                                                    <p>No Products Found</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ) : (
                                    dataItems === undefined && (
                                        <div className="w-100">
                                            <Preloader />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="c-shop__pagination row mt-2">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex="-1">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">
                                        3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer jsonData={jsonData} />
        </>
    );
};

export default Shop;
