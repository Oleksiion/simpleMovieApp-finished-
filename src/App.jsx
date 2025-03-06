import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import AllMovies from "./components/AllMovies";
import TrendingMovies from "./components/TrendingMovies";

export const GlobalContext = createContext();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        setErrorMessage,
        setMovieList,
        movieList,
        isLoading,
        setIsLoading,
        errorMessage,
        debouncedSearchTerm,
        setDebouncedSearchTerm,
        trendingMovies,
        setTrendingMovies,
      }}
    >
      <main>
        <div className="pattern"></div>

        <div className="wrapper">
          <Header />
          <Search />
          <TrendingMovies />
          <AllMovies />
        </div>
      </main>
    </GlobalContext.Provider>
  );
};

export default App;
