import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState } from "react"
import { useEffect } from "react";
function App() {
  // const [name, setName] = useState()
  // const [img, setImg] = useState()
  // const [search, setS] = useState()
  let [data, setData] = useState()
  let [searchHolder, setSearchHolder] = useState("")


  function searchF(valueHolder) {
    setSearchHolder(valueHolder)
  }


  fetch(` https://api.tvmaze.com/search/shows?q=${searchHolder}`)
    .then((res) => {
      return res.json()
    }).then((data) => {
      const filteredData = data.map(item => item.show)
      setData(filteredData)

    })
    .catch(() => {
      console.log("error we can't find that Movie for now")
    })



  if (!data) {
    return <div >loading...</div>
  }


  return (
    <div classNameName="App">
      <Header />
      <div className="main">
        <Search test={searchF} />
        <div className="movies-section">
          {/* <!-- one card --> */}
          {data.map((check) => <MovieCard item={check} />)}
          {/* <!-- one card --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
