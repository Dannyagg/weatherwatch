import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
console.log(process.env.React_API_KEY)


function App() {
  return (
    <div className="App">

      <h1 className="heading"> Weather Watch </h1>

      <div className="card-box"> 
         <WeatherSearch />
      </div>

    </div>

  );
}

export default App;
