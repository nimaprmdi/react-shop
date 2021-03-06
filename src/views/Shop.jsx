import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Preloader from "../components/Preloader";
import ProductsSorting from "../components/ProductsSorting";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { filterDatasByCats, handleSorting } from "../helpers/handleFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = ({ jsonData, cart, setCart }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let cats = searchParams.get("category");
    let sorting = searchParams.get("sorting");

    // Pagination
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

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

    const handlePageClick = (event) => {
        const newOffset = dataItems && dataItems.length > 0 && (event.selected * 3) % dataItems.length;
        setItemOffset(newOffset);
    };

    const handleAddCart = (item) => {
        const cartItems = jsonData && jsonData.length > 0 && [...jsonData[0].products.items]; // Clone Object
        const indexOf = cartItems.indexOf(item);
        setCart([...cart, cartItems[indexOf]]);
        toast.success("Wow so easy!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    };

    useEffect(() => {
        const endOffset = itemOffset + 3;
        dataItems && dataItems.length > 0
            ? setCurrentItems(dataItems.slice(itemOffset, endOffset))
            : setCurrentItems(null);
        dataItems && dataItems.length > 0 && setPageCount(Math.ceil(dataItems.length / 3));
    }, [jsonData, sorting, cats, dataItems, itemOffset, pageCount]);

    return (
        <>
            <Navbar jsonData={jsonData} />
            <Header cart={cart} setCart={setCart} jsonData={jsonData} />

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
                                        <ProductsSorting
                                            searchParams={searchParams}
                                            setSearchParams={setSearchParams}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="c-shop__product-items d-flex flex-wrap justify-content-start">
                                {currentItems && currentItems.length > 0 ? (
                                    currentItems.map((item, index) => {
                                        return (
                                            <Product
                                                onHandleAddCart={() => handleAddCart(item)}
                                                key={index}
                                                item={item}
                                            />
                                        );
                                    })
                                ) : (currentItems && currentItems.length == 0) || currentItems === null ? (
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
                                    currentItems === undefined && (
                                        <div className="w-100">
                                            <Preloader />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {currentItems !== null && (
                            <div className="c-shop__pagination row mt-2">
                                <ReactPaginate
                                    renderOnZeroPageCount={null}
                                    className="c-pagination pagination justify-content-end"
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    pageClassName="page-item rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                                    pageLinkClassName="page-link"
                                    previousClassName=" rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                                    previousLinkClassName="page-link"
                                    nextClassName="rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination"
                                    activeClassName="bg-success"
                                    activeLinkClassName="text-light disabled bg-success"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
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

export default Shop;
