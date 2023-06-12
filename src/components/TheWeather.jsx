import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

class TheWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherReport: [],
            todayWeather: [],
            icon: ''
        };
        // console.log('props', props)
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
            weatherReport: response.daily,
            todayWeather: response.daily[0].temp,
            todayImage: response.daily[0].weather[0].icon


        });

    };

    render() {

        const { weatherReport, todayWeather, todayImage } = this.state;
        console.log(todayWeather)
        return (

            <>

                <div className="report-wrapper">
                    <div>

                        <Card className="today-card">
                            <Card.Header className='today-card-header'>
                                <h1 className="one-day-heading"> Today </h1>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div>
                                        <p> Average: <strong>{todayWeather.day} &deg;F</strong></p>
                                        <p> Min: <strong>{todayWeather.min} &deg;F</strong></p>
                                        <p> Max: <strong>{todayWeather.max} &deg;F</strong></p>
                                    </div>
                                    <div>
                                        <Image className="weather-image" src={`http://openweathermap.org/img/wn/${todayImage}.png`} alt="icon" />

                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                    <hr />
                    <div>
                        <h1 className="week-heading">7-Day Weather Report</h1>
                    </div>

                    {weatherReport.length > 0 ? (
                        weatherReport.map((singleDay) => {
                            const unixTime = singleDay.dt;
                            const date = new Date(unixTime * 1000);
                            let weekDay = date.getDay();
                            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            let theDay = '';
                            if (weekDay === 6)
                                theDay = days[6];

                            else if (weekDay === 0)
                                theDay = days[0];

                            else if (weekDay === 1)
                                theDay = days[1];

                            else if (weekDay === 2)
                                theDay = days[2];

                            else if (weekDay === 3)
                                theDay = days[3];

                            else if (weekDay === 4)
                                theDay = days[4];

                            else if (weekDay === 5)
                                theDay = days[5];

                            else if (weekDay === 6)
                                theDay = days[6];


                            return (

                                <>

                                    <div className="weather-report">

                                        <Card className="weather-card">
                                            <Card.Header>
                                                <p><strong>{theDay}</strong></p>
                                                <p>Date: <strong>{date.toLocaleDateString("en-US")}</strong></p>

                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <p> <strong>{singleDay.temp.day} &deg;F</strong></p>

                                                    <p>{singleDay.weather[0].description}</p>

                                                    <Image className="weather-image" src={`http://openweathermap.org/img/wn/${singleDay.weather[0].icon}.png`} alt="icon" />
                                                    <p> <strong>{singleDay.alerts}</strong></p>

                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>

                            );
                        })


                    ) : (
                        <></>
                    )}
<hr />
                </div>

            </>
        );
    }
}


export default TheWeather;