import React, { useState, useEffect } from "react";

const ProductsSorting = ({ searchParams, setSearchParams }) => {
    const handleSelectChange = (e) => {
        setSearchParams({ ...searchParams, sorting: e.target.value });
        let updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set("sorting", e.target.value);
        setSearchParams(updatedSearchParams.toString());
    };

    return (
        <select className="form-control" onChange={(e) => handleSelectChange(e)}>
            <option value={"all"}>All</option>
            <option value={"featured"}>Featured</option>
            <option value={"a-to-z"}>A to Z</option>
            <option value={"z-to-a"}>Z to A</option>
            <option value={"random"}>Random</option>
        </select>
    );
};

export default ProductsSorting;
