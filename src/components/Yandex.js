import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import "../styles/Yandex.css";


function Yandex() {
    return (
        <div className="map-container">
            <YMaps>
                <Map
                    defaultState={{ center: [55.755864, 37.617698], zoom: 9 }}
                    className="map"
                />
            </YMaps>
        </div>
    );
}

export default Yandex;
