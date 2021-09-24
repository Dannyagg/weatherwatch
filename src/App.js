import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import manojmalshanunsplash from './components/Images/manojmalshanunsplash.jpg';
console.log(process.env.React_API_KEY)


function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${manojmalshanunsplash})`,
        backgroundSize: "cover",
        
      }}
    >

      <h1 className="heading"> Weather Watch </h1>
      {/* <hr /> */}

      <div className="card-box"> 
         <WeatherSearch />
      </div>

    </div>

  );
}

export default App;
