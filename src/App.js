import "./App.css";
import "./style.scss";
import searchIcon from "./search.svg";
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';
const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}
function App() {  
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies(searchTerm);
    },[])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                 placeholder="Search for movies"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                />  
                <img
                 src={searchIcon}
                 alt="Search"
                 onClick={() => searchMovies(searchTerm)}
                /> 
            </div>
            {
               movies?.length >= 0
                ? (
                        <div className="container">
                            {
                                movies.map((movie) => {
                                    console.log(movies.length);
                                    <h1 className="test">{ movie.Title}</h1>
                                })
                            }
                            
                    </div>
                    ) : (
                        <div className="empty">
                            <h2>No Data Found</h2>
                        </div>
                )
            }
          </div>
      );
      
}

export default App;
