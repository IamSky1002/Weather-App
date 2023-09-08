import apiData from "../key/keys"
import { useState } from "react"
import "./searchBar.css"
const SearchBar = (props)=>{

    const api = {
        key: apiData.API_KEY,
        url: apiData.BASE_URL
    }

    const [searchQry, setSearchQry] = useState("");
    

    const search =(e) =>{
        if(e.key ==="Enter") {
            fetch(`${api.url}${searchQry}&units=metric&appid=${api.key}`)
            .then((res) => res.json())
            .then((result) =>{
                setSearchQry("");
                props.callWeather(result);
                
            });
        }
    }

    

    return(
        <div className="search-container">
            <input className="search-bar" 
            type="text" placeholder="Search..."
            onChange={(e) => setSearchQry(e.target.value)}
            value={searchQry} onKeyDown={search}
          
            />
        </div>
    )
}
export default SearchBar