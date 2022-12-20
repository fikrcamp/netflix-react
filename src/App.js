import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";


function App() {
  // declaring the movie and userinput states

  const [userInput, setUserInput] = useState([]);
  const [movie, setMovie] = useState([]);
// taken the useEffect to fetch the data from the server(api) and storing the data value into movie state
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${userInput}`)
      .then((res) => res.json())
      .then((data) => setMovie(data)
      )
      .catch(() => document.write("Error!"))
  }, [movie])

  function searchInfo(input) {
    setUserInput(input);
  }
  return (
    <div classNameName="App">
      <Header />
      <div className="main">
        <Search SearchHandler={searchInfo} />
        <div className="movies-section">
          {movie.map((movie) => <MovieCard Movies={movie} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
