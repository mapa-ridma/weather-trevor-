import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  // Define API key, create values and way to change values

const apiKey = ''
const [data, setData] = useState([{}])
const [city, setCity] = useState("")

const fetchWeather = (event) => {
  if (event.key === "Enter") {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`).then((response) => {
      setData(response.data)
      console.log(response.data)
      
      })
      setCity('')
      

  }
}





return(
  <>
  <div id="header">
  <h1>How's the Weather, Trevor?</h1> 
  </div>


  <div id="inputCity">
      <input 
        size="50"
        className="inputCity" 
        placeholder="Type City Here..."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={fetchWeather}
        type="text"
        />


    

  </div>



<div id="location-container">






  <div id="weather-content">
      
  </div>  


{/* Testing from here */}


<div className="weatherContainer">

        <div className="top">
          <div className="location">
            <h1>{data.city?.name}</h1>
          </div>

<br></br>

{/* Current Day - Day 1 */}

  <div className = "dayContainer">

          <div className="date">
            {data.list ? <h1>Date: {data.list[0].dt_txt}</h1> : null}
          </div>
          <div className="tempMin">
            {data.list ? <h1>Min Temp: {data.list[0].main.temp_min}°C</h1> : null}
          </div>
          <div className="tempMax">
            {data.list ? <h1>Max Temp: {data.list[0].main.temp_max}°C</h1> : null}
          </div>
          <div className="weatherDescription">
            {data.list ? <h1>Weather: {data.list[0].weather[0].main}</h1> : null}
          </div>
          {/* <div className="weatherIcon">
            {data.list ? <h1>{data.list[0].weather[0].icon}</h1> : null}
          </div> */}

  </div>


{/* Day 2 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <h1>Date: {data.list[8].dt_txt}</h1> : null}
          </div>
          <div className="tempMin">
            {data.list ? <h1>Min Temp: {data.list[8].main.temp_min}°C</h1> : null}
          </div>
          <div className="tempMax">
            {data.list ? <h1>Max Temp: {data.list[8].main.temp_max}°C</h1> : null}
          </div>
          <div className="weatherDescription">
            {data.list ? <h1>Weather: {data.list[8].weather[0].main}</h1> : null}
          </div>

</div>



{/* Day 3 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <h1>Date: {data.list[16].dt_txt}</h1> : null}
          </div>
          <div className="tempMin">
            {data.list ? <h1>Min Temp: {data.list[16].main.temp_min}°C</h1> : null}
          </div>
          <div className="tempMax">
            {data.list ? <h1>Max Temp: {data.list[16].main.temp_max}°C</h1> : null}
          </div>
          <div className="weatherDescription">
            {data.list ? <h1>Weather: {data.list[16].weather[0].main}</h1> : null}
          </div>

</div>


{/* Day 4 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <h1>Date: {data.list[24].dt_txt}</h1> : null}
          </div>
          <div className="tempMin">
            {data.list ? <h1>Min Temp: {data.list[24].main.temp_min}°C</h1> : null}
          </div>
          <div className="tempMax">
            {data.list ? <h1>Max Temp: {data.list[24].main.temp_max}°C</h1> : null}
          </div>
          <div className="weatherDescription">
            {data.list ? <h1>Weather: {data.list[24].weather[0].main}</h1> : null}
          </div>

</div>


{/* Day 5 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <h1>Date: {data.list[32].dt_txt}</h1> : null}
          </div>
          <div className="tempMin">
            {data.list ? <h1>Min Temp: {data.list[32].main.temp_min}°C</h1> : null}
          </div>
          <div className="tempMax">
            {data.list ? <h1>Max Temp: {data.list[32].main.temp_max}°C</h1> : null}
          </div>
          <div className="weatherDescription">
            {data.list ? <h1>Weather: {data.list[32].weather[0].main}</h1> : null}
          </div>

</div>






</div>





</div>









{/* Testing to here */}











    
  
  {/* <div id="btn-container">
      <button className="btn-group"></button>
      <button className="btn-group"></button>
      <button className="btn-group"></button>
    
  </div> */}


</div>

  </>
)
 





// Function App closing curly brace
}

export default App;
