import React from 'react';
import TheWeather from './TheWeather';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function WeatherSearch() {
    const [local, setLocal] = useState();
    const [location, setLocation] = useState({
        longitude: null,
        latitude: null,
        nation: '',
        city: '',

    });

    const handleChange = (event) => {
        setLocal(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${local},US&appid=${API_KEY}`)
            .then(response => response.json())

        const { lon, lat, name, country, zip } = response;
        setLocation({ longitude: lon, latitude: lat, city: name, nation: country, area: zip });

    }

    return (

        <div>
            <div className="form-container">
                <Form className="form-horizontal" onSubmit={handleSubmit}>
                    <Form.Group className="mb" controlId="formBasicEmail"  >
                        <Form.Label className="label"> Search weekly weather report by zip code: </Form.Label>
                        <Form.Control
                            type="number"
                            value={local}
                            placeholder="Enter zip code"
                            onChange={handleChange}
                            required
                            size="lg" />
                    </Form.Group>

                    <Button className="btn" variant="success" type="submit" size="lg">
                        Search
                    </Button>
                </Form>

            </div>

            <div className="place"> <h1 className="city-nation"> {`${location.city} ${location.nation}`} </h1> </div>

            {!!location.latitude && !!location.longitude ?
                (<TheWeather lat={location.latitude} lon={location.longitude} name={location.city}
                    country={location.country} zip={location.area} />) : null}
        </div>



    )

}

export default WeatherSearch;


