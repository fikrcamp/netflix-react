import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState('');
  //handleOnSearch prop passes a function from the parent component (App.js)
  //whenever search button is clicked the current value of the search input field is called as an argument 
  return (
    <div className="search-section">
      Search for your favorite shows
      <div className="search-input">
        <input className="search-box" type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn-search" onClick={()=> props.handleOnSearch(search)}>Search</button>
      </div>
    </div>
  );
}

export default Search;
