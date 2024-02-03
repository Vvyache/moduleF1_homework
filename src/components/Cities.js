import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import JsonFile from "../cities/cities.json";
import "../styles/Cities.css";

function Cities({ onChange }) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCities(JsonFile);
    }, []);

    const handleNameChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="cities-container">
            <p className="city-label">Select a city from the list:</p>
            <Form.Select aria-label="Select city" id="c1" onChange={handleNameChange}>
                {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
}

export default Cities;

