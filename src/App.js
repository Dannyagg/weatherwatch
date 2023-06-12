import React from 'react';
import WeatherSearch from './components/WeatherSearch';
// import MapData from './components/MapData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App" >

      <h1 className="heading"> Weather Watch </h1>
   
      <div className="card-box"> 
         <WeatherSearch />
         {/* <MapData /> */}
      </div>

    </div>

  );
}

export default App;
