import "./App.css";
import "./style.scss";
import {useEffect} from "react";
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';
function App() {  
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    },[])
    return (
          <h1>MovieLand</h1>
      );
      
}

export default App;
