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
        nation: null,
        city: null
    });

    const handleChange = (event) => {
        setLocal(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


<<<<<<< HEAD
       
=======
        const myApi = ''

        const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${local},US&appid=${myApi}`)
            .then(response => response.json())
        const { lon, lat, name, country, zip } = response;
        console.log(response);

        setLocation({ longitude: lon, latitude: lat, city: name, nation: country, area: zip });

    }

    return (

        <div>

            {/* <form className="form-horizontal" onSubmit={handleSubmit}>
                <label>
                    Search weather information by zip code:
                    <input
                        type="number"
                        value={local}
                        placeholder="Enter zip code"
                        onChange={handleChange}
                    />
                </label>
                <button className="btn" type=" submit" >
                    Search
                </button>
            </form> */}

<<<<<<< HEAD
            <div className="form-container">


                <Form className="form-horizontal" onSubmit={handleSubmit}>
                    <Form.Group className="mb" controlId="formBasicEmail"  >
                        <Form.Label> Search weather information by zip code:  </Form.Label> 
                        
                        <Form.Control
                            type="number"
                            value={local}
                            placeholder="Enter zip code"
                            onChange={handleChange}
                            required
                            size="lg"
                        />

                    </Form.Group>

                    <Button className="btn" variant="outline-info" type="submit" size="lg">
                        Search
                    </Button>
                </Form>


            </div>

=======

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb" controlId="formBasicEmail"  >
                    <Form.Label>Search weather information by zip code:</Form.Label>
                    <Form.Control
                        type="number"
                        value={local}
                        placeholder="Enter zip code"
                        onChange={handleChange} 
                        required
                        size="lg"
                        />

                </Form.Group>

                <Button className="btn" variant="outline-info" type="submit" size ="lg">
                    Search
                </Button>
            </Form>
>>>>>>> 9fa3d4a6e1508be5f4c1c5bc608cba23d7af1bf7


            <div className="place"> <h1 className="city-nation"> {location.city} {location.nation}</h1> </div>

            {!!location.latitude && !!location.longitude ?
                (<TheWeather lat={location.latitude} lon={location.longitude} name={location.city}
                    country={location.country} zip={location.area} />) : null}
        </div>


    )

}

export default WeatherSearch;


