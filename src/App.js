import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState, useEffect } from "react";
function App() {
const [movie, setMovie] = useState([]);
  const [lookFor, setLookFor] = useState([]);

   useEffect(()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${lookFor}`)
    .then((res)=> res.json())
    .then((data)=> setMovie(data))
   

  }, [movie]) 
   function Serch(input){
  
     setLookFor(input);
  }



  return (
    <div classNameName="App">
      <Header />
      <div className="main">
        <Search SerchData={Serch} />
        <div className="movies-section">
          {/* <!-- one card --> */}
        {movie.map((movie)=> <MovieCard Movies={movie}/>)} 
          {/* <!-- one card --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
