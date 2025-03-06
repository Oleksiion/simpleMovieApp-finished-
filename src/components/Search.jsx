import React, { useContext } from "react";
import { GlobalContext } from "../App";
import SearchIcon from "../assets/search.svg";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(GlobalContext);

  return (
    <div className="search">
      <div>
        <img src={SearchIcon} alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Search;
