import { useState } from 'react';
import './component/pic.css'
import './App.css';
import SearchBar from './component/searchBar';
import InfoContainer from './component/infoContainer';
import WelcomePage from './component/welcome';


function App() {


  const [weather, setWeather] = useState("");


  
  const getWeatherData = (e)=>{
      setWeather(e)  

    
    
  }


  function getBgWeather(){
    let bgWeather = String(weather.weather[0].main);
    return bgWeather
  }

 





  

  return (
    <div className={weather === "" ? "card-container" : `card-container ${getBgWeather()}` }>
    
      
      
      {typeof weather.main !== "undefined" ? (
        <div>
            <SearchBar callWeather ={getWeatherData}/>
            <InfoContainer weatherData = {weather}/>
           
          
        </div>
        
      ) : (
       <div>
        <WelcomePage/>
        <SearchBar callWeather ={getWeatherData}/>

       </div>
      )}
      
   </div>
  );
}

export default App;
