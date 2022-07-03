import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductsSorting = ({ searchParams, setSearchParams }) => {
    let navigate = useNavigate();

    const handleSelectChange = (e) => {
        setSearchParams({ ...searchParams, sorting: e.target.value });
    };

    useEffect(() => {}, [searchParams]);

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
