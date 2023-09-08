import "./infoContainer.css"
const InfoContainer = (props) => {

        const {weatherData= {}} = props;
        
        // Weather Qurry
        const wQry= {
            location: `${weatherData.name}, ${weatherData.sys.country}`,
            temp: Math.round(weatherData.main.temp),
            weather: weatherData.weather[0].main,
            humidity: weatherData.main.humidity,
            wind: weatherData.wind.speed,
            visibility: Number(weatherData.visibility/1000),
            

        }
       
        const dateBuild = () => {
            let date = new Date();
            let dateQry = date.toString().slice(3, 15);
            let hours = date.getHours();
            let minutes = date.getMinutes();
           
            let timePeriod = hours>= 12 ? "P.M.":"A.M.";

            if(hours>12)
            {hours -=12}
          
            const dateTime = `${dateQry}, ${hours}:${minutes < 10 ? "0" : ""}${minutes} ${timePeriod}`;
            return dateTime;
          };
            
           

    return (
        <div>
            {/* top */}
            <div className='top-container'>
                <div className='front-container'>
                    {/* Top1, Opening */}
                    <div className='opening'>
                        <div className='time'>{dateBuild()}</div>
                        <div className='location'>{wQry.location}</div>
                        </div>

                     {/* Top1, Temp */}
                    <span className="temp-container">
                    <div className='temp-num'>{wQry.temp}</div><span className="celsius">°<span>C</span></span>
                    </span>
                </div>

                <div className='back-container'>
                    {/* Top2, Weather */}
                    <div className='weather'>It's {wQry.weather}</div>
                </div>
            </div>
            {/* bottom container */}
            <div className="bottom-space">
                <div className='bottom-container'>
                    <span className='bottom humidity'>{wQry.humidity}%<span>Humidity</span> </span>
                    <span className='bottom wind'>{wQry.wind} km/h<span>Wind speed</span></span>
                    <span className='bottom visibility'>{wQry.visibility} km<span>Visibility</span></span>
                </div>
            </div>
        </div>
    )
}

export default InfoContainer
