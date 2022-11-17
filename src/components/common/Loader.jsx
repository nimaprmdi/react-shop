import React from "react";
import spinner from "../../assets/images/spinner.svg";

const Loader = ({ style }) => {
    return <img src={spinner} alt="Loader" style={{ ...style }} />;
};

export default Loader;
