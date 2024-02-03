import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Main.css";
import Weathers from "./Weathers";
import Yandex from "./Yandex";
import Cities from "./Cities";

function Main() {
    const [name, setName] = useState("Moscow");
    const [weathers, setWeathers] = useState([]);
    const [displayedWeathers, setDisplayedWeathers] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [key, setKey] = useState(Date.now()); // Уникальный ключ

    const handleNameChange = (name) => {
        setName(name);
        setKey(Date.now()); // Обновляем ключ при изменении города
        const WeaUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${name},ru&APPID=f3cde2aaa63a09f88865119a867cff09&units=metric`;
        axios.get(WeaUrl)
            .then(res => {
                setWeathers(res.data.list);
            })
            .catch(error => {
                console.error("Error fetching weather data: ", error);
            });
    };

    useEffect(() => {
        // Обновляем displayedWeathers при изменении weathers
        if (weathers.length > 0) {
            setDisplayedWeathers(weathers.slice(0, 6));
        }
    }, [weathers]);

    const handleShowMore = () => {
        // Добавляем следующие 6 блоков погоды при нажатии на кнопку "The next day"
        const nextWeathers = weathers.slice(displayedWeathers.length, displayedWeathers.length + 6);
        setDisplayedWeathers(prevWeathers => [...prevWeathers, ...nextWeathers]);
    };

    return (
        <main>
            <Cities onChange={handleNameChange} />
            <Yandex key={key} /> {/* Передаем ключ */}
            <Weathers name={name} weathers={displayedWeathers} />
            {!showMore && weathers.length > 6 && (
                <button onClick={handleShowMore}>The next day</button>
            )}
        </main>
    );
}

export default Main;
