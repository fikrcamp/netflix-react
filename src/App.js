import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";

function App() {

  const [showName, setShowName] = useState([]);
  const [search, setSearch] = useState([]);
//using useEffect hook to fetch data from API and update the value of search every time the component is rendered
  useEffect(()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then((res)=> res.json())
    .then((data)=> setShowName(data))
  //adding dependency array to ensure that the useEffect hook is only called when the values in the dependency array changes
  }, [showName]) 

  function addSearchedData(search){
    //passes prop to Search component.
    //updates the search value of search when its called, inturn causes useEffect to be run and data fetched
    setSearch(search);
  }
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search handleOnSearch={addSearchedData}/>
        <div className="movies-section">
          {showName.map((show) => <MovieCard data={show}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
