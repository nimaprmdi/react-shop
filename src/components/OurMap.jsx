import { useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const OurMap = () => {
    const [data, setData] = useState({});
    const productState = useSelector((state) => state.productState);

    mapboxgl.accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
    }, []);

    useEffect(() => {
        setData(productState.products.record);

        data && data[0] && setLng(data[0].contact.location.latitude);
        data && data[0] && setLat(data[0].contact.location.longitude);
    }, [productState, data]);

    return <div id="mapid" ref={mapContainer} className="map-container" style={{ width: "100%", height: "300px" }} />;
};

export default OurMap;
