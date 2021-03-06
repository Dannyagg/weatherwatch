import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class TheWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherReport: [],
        };
        console.log('props', props)
    }

    componentDidMount() {
        this._fetchWeatherInfo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat) {
            this._fetchWeatherInfo();
        }
    }


    _fetchWeatherInfo = async () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lon}&units=imperial&exclude=minutely,hourly&appid=${API_KEY}`)
            .then(response => response.json());
        this.setState({
            weatherReport: response.daily

        });

    };

    render() {

        const { weatherReport } = this.state;
        return (

            <div>

                {weatherReport.length > 0 ? (
                    weatherReport.map((singleDay) => {

                        const unixTime = singleDay.dt;
                        const date = new Date(unixTime * 1000);
                        let weekDay = date.getDay();
                        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        let theDay = '';
                        if (weekDay === 6) theDay = days[6]
                        else
                            if (weekDay === 0) theDay = days[0]
                            else
                                if (weekDay === 1) theDay = days[1]
                                else
                                    if (weekDay === 2) theDay = days[2]
                                    else
                                        if (weekDay === 3) theDay = days[3]
                                        else

                                            if (weekDay === 4) theDay = days[4]
                                            else
                                                if (weekDay === 5) theDay = days[5]
                                            else
                                                if (weekDay === 6) theDay = days[6]

                        console.log(theDay);

                        return (
                            <div className="weather-report">

                                <Card className="weather-card" border="success" style={{ width: 'auto' }} >
                                    <Card.Header>
                                        <p><strong>{theDay}</strong></p>
                                        <p>Date: <strong>{date.toLocaleDateString("en-US")}</strong></p>
                                        
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <p>Average Day Temperature: <strong>{singleDay.temp.day} &deg;F</strong></p>
                                            <p>Minimum Temperature: <strong>{singleDay.temp.min} &deg;F</strong></p>
                                            <p>Maximum Temperature: <strong>{singleDay.temp.max} &deg;F</strong></p>
                                            <p>Condition: <strong>{singleDay.weather[0].description}</strong></p>
                                            <p> <strong>{singleDay.alerts}</strong></p> <br />
                                            <img className="Weather-image" src={`http://openweathermap.org/img/wn/${singleDay.weather[0].icon}.png`} alt="icon" /> <br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                            </div>
                        );
                    })


                ) : (
                    <></>
                )}
            </div>
        );
    }
}


export default TheWeather;