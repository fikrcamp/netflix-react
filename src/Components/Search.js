import react, { useState } from "react"

function Search(props) {
  const [value, setSearch] = useState()
  return (
    <div className="search-section">
      Search for your favorite shows
      <div classNameName="search-input">
        <input className="search-box" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <button className="btn-search" onClick={() => props.test(value)}> Search</button>
      </div>
    </div >
  );
}

export default Search;
