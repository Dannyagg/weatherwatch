import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


class TheWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherReport: [],
        };
console.log('props',props)
    }

    componentDidMount() {
        this._fetchWeatherInfo();
    }

    componentDidUpdate(prevProps) {
        if(this.props.lat !== prevProps.lat){
            this._fetchWeatherInfo();
        }
    }

    _fetchWeatherInfo = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lon}&units=imperial&exclude=minutely,hourly&appid=de07d1446efc27eb166e53b0fc109012`)
            .then(response => response.json());
        this.setState({
            weatherReport: response.daily

        });
 
    };

    render() {
           
        const {weatherReport}=this.state;   
        return (
        
            <div>
    
               {weatherReport.length > 0 ? (
                    weatherReport.map((singleDay) => {
                        
                            const unixTime = singleDay.dt;
                            const date = new Date(unixTime*1000);
                            
                        return (
                            <div className = "weather-report">
                             {/* <p>Date: <strong>{date.toLocaleDateString("en-US")}</strong></p>
                                <p>Average Day Temperature: <strong>{singleDay.temp.day} &deg;F</strong></p>
                                <p>Minimum Temperature: <strong>{singleDay.temp.min} &deg;F</strong></p>
                                <p>Maximum Temperature: <strong>{singleDay.temp.max} &deg;F</strong></p>
                                <p>Condition: <strong>{singleDay.weather[0].description}</strong></p>
                                <p> <strong>{singleDay.alerts}</strong></p>
                                <img className ="Weather-image" src={`http://openweathermap.org/img/wn/${singleDay.weather[0].icon}.png`} alt="icon"/>
 */}

                            <Card className="weather-card" border="primary" style={{ width: 'auto' }} >
                                <Card.Header><p>Date: <strong>{date.toLocaleDateString("en-US")}</strong></p></Card.Header>
                                <Card.Body>
                                <Card.Text>
                                <p>Average Day Temperature: <strong>{singleDay.temp.day} &deg;F</strong></p>
                                <p>Minimum Temperature: <strong>{singleDay.temp.min} &deg;F</strong></p>
                                <p>Maximum Temperature: <strong>{singleDay.temp.max} &deg;F</strong></p>
                                <p>Condition: <strong>{singleDay.weather[0].description}</strong></p>
                                <p> <strong>{singleDay.alerts}</strong></p> <br/>
                                <img className ="Weather-image" src={`http://openweathermap.org/img/wn/${singleDay.weather[0].icon}.png`} alt="icon"/> <br/>
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