import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  // Define API key, create values and way to change values

const apiCode = '4905ba3a11a81943fd1b0b0b5f364428'
const [data, setData] = useState([{}])
const [city, setCity] = useState("")

const fetchWeather = (event) => {
  if (event.key === "Enter") {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiCode}`).then((response) => {
      setData(response.data)
      console.log(response.data)
      
      })
      setCity('')
      

  }
}



// let icon = null;

// function displayIcons () {
//   if(typeof data.main != "undefined"){
//     if(data.weather[0].main == "clouds"){
//       icon = "./icons/04d@2x.png"
// }  else if(data.weather[0].main == "thunderstorm"){
//     icon = "./icons/11d@2x.png"
// }   else if(data.weather[0].main == "rain"){
//     icon = "./icons/09n@2x.png"
// }   else if(data.weather[0].main == "clear"){
//     icon = "./icons/01d@2x.png"
// }   else if(data.weather[0].main == "snow"){
//     icon = "./icons/13n@2x.png"
// }}

// }



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



<br></br>
<div id="location-container">






  <div id="weather-content">
      
  </div>  


{/* Testing from here */}


<div className="weatherContainer">

        <div className="top">
          <div className="location">
            <h2>{data.city?.name}</h2>
          </div>

<br></br>

{/* Current Day - Day 1 */}

  <div className = "dayContainer">

          <div className="date">
            {data.list ? <p> {data.list[0].dt_txt}  </p> : null}
          </div>
          &nbsp;
          <div className="tempMin">
            {data.list ? <p>Min Temp: {data.list[0].main.temp_min}°C </p> : null}
          </div>
          &nbsp;
          <div className="tempMax">
            {data.list ? <p>Max Temp: {data.list[0].main.temp_max}°C </p> : null}
          </div>
          &nbsp;
          <div className="weatherDescription">
            {data.list ? <p>Condition: {data.list[0].weather[0].main} </p> : null} 
          </div>
          &nbsp;
          <div className="windspeed">
            {data.list ? <p>Windspeed: {data.list[0].wind.speed} km/h</p> : null}
          </div>
          &nbsp;

          {/* <div className="weatherIcon">
            {data.list ? <p>{data.list[0].weather[0].icon}</p> : null}
          </div> */}
          
          {/* "http://openweathermap.org/img/wn/${iconId}@2x.png" */}
          {/* <img src="http://openweathermap.org/img/wn/"{data.list[0].weather[0].icon}"@2x.png" alt="icon"></img> */}

  </div>

 

{/* Day 2 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <p> {data.list[8].dt_txt} </p> : null}
          </div>
          &nbsp;
          <div className="tempMin">
            {data.list ? <p>Min Temp: {data.list[8].main.temp_min}°C </p> : null}
          </div>
          &nbsp;
          <div className="tempMax">
            {data.list ? <p>Max Temp: {data.list[8].main.temp_max}°C </p> : null}
          </div>
          &nbsp;
          <div className="weatherDescription">
            {data.list ? <p>Condition: {data.list[8].weather[0].main} </p> : null}
          </div>
          &nbsp;
          <div className="windspeed">
            {data.list ? <p>Windspeed: {data.list[8].wind.speed} km/h</p> : null}
          </div>
          &nbsp;

</div>



{/* Day 3 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <p> {data.list[16].dt_txt} </p> : null}
          </div>
          &nbsp;
          <div className="tempMin">
            {data.list ? <p>Min Temp: {data.list[16].main.temp_min}°C </p> : null}
          </div>
          &nbsp;
          <div className="tempMax">
            {data.list ? <p>Max Temp: {data.list[16].main.temp_max}°C </p> : null}
          </div>
          &nbsp;
          <div className="weatherDescription">
            {data.list ? <p>Condition: {data.list[16].weather[0].main} </p> : null}
          </div>
          &nbsp;
          <div className="windspeed">
            {data.list ? <p>Windspeed: {data.list[16].wind.speed} km/h</p> : null}
          </div>
          &nbsp;

</div>


{/* Day 4 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <p> {data.list[24].dt_txt} </p> : null}
          </div>
          &nbsp;
          <div className="tempMin">
            {data.list ? <p>Min Temp: {data.list[24].main.temp_min}°C </p> : null}
          </div>
          &nbsp;
          <div className="tempMax">
            {data.list ? <p>Max Temp: {data.list[24].main.temp_max}°C </p> : null}
          </div>
          &nbsp;
          <div className="weatherDescription">
            {data.list ? <p>Condition: {data.list[24].weather[0].main} </p> : null}
          </div>
          &nbsp;
          <div className="windspeed">
            {data.list ? <p>Windspeed: {data.list[24].wind.speed} km/h</p> : null}
          </div>
          &nbsp;

</div>


{/* Day 5 */}
<br></br>
<div className = "dayContainer">

          <div className="date">
            {data.list ? <p> {data.list[32].dt_txt} </p> : null}
          </div>
          &nbsp;
          <div className="tempMin">
            {data.list ? <p> Min Temp: {data.list[32].main.temp_min}°C </p> : null}
          </div>
          &nbsp;
          <div className="tempMax">
            {data.list ? <p>Max Temp: {data.list[32].main.temp_max}°C </p> : null}
          </div>
          &nbsp;
          <div className="weatherDescription">
            {data.list ? <p>Condition: {data.list[32].weather[0].main} </p> : null}
          </div>
          &nbsp;
          <div className="windspeed">
            {data.list ? <p>Windspeed: {data.list[32].wind.speed} km/h</p> : null}
          </div>
          &nbsp;

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
