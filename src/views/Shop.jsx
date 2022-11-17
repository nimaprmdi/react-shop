import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Preloader from "../components/Preloader";
import ProductsSorting from "../components/ProductsSorting";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { filterDatasByCats, handleSorting } from "../helpers/handleFilter";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import PriceSlider from "../components/common/PriceSlider";

const Shop = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);
    const [searchParams, setSearchParams] = useSearchParams();
    let cats = searchParams.get("category");
    let sorting = searchParams.get("sorting");

    /// The Price Filter
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [highestPrice, setHighestPrice] = useState(0);
    const [lowestPrice, setLowestPrice] = useState(0);
    const [filteredPriceData, setFilteredPriceData] = useState([]);

    // Pagination
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const dataItems = React.useMemo(() => {
        if (!cats) {
            if (data && data[0]) {
                if (sorting) {
                    return handleSorting(sorting, filteredPriceData);
                } else {
                    return filteredPriceData;
                }
            }
        } else {
            let filteredCats = [];

            if (data && data[0]) {
                filteredCats = filteredPriceData
                    ? filterDatasByCats(filteredPriceData, cats)
                    : filterDatasByCats(data[0].products.items, cats);

                if (sorting) {
                    return handleSorting(sorting, filteredCats);
                } else {
                    return filteredCats;
                }
            }
        }
    }, [cats, sorting, data, highestPrice, lowestPrice]);

    const handlePageClick = (event) => {
        const newOffset = dataItems && dataItems.length > 0 && (event.selected * 3) % dataItems.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        setData(productState.products.record);

        const endOffset = itemOffset + 3;
        dataItems && dataItems.length > 0
            ? setCurrentItems(dataItems.slice(itemOffset, endOffset))
            : setCurrentItems(null);
        dataItems && dataItems.length > 0 && setPageCount(Math.ceil(dataItems.length / 3));
    }, [productState, data, sorting, cats, dataItems, itemOffset, pageCount, highestPrice, lowestPrice]);

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <Categories searchParams={searchParams} setSearchParams={setSearchParams} />

                        <PriceSlider
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            highestPrice={highestPrice}
                            setHighestPrice={setHighestPrice}
                            lowestPrice={lowestPrice}
                            setLowestPrice={setLowestPrice}
                            filteredPriceData={filteredPriceData}
                            setFilteredPriceData={setFilteredPriceData}
                        />
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
                                        return <Product key={index} item={item} />;
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
        </>
    );
};

export default Shop;
