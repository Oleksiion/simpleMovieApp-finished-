import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../utils/fetchMovies";
import { useDebounce } from "react-use";

const AllMovies = () => {
  const {
    movieList,
    setIsLoading,
    setErrorMessage,
    searchTerm,
    setSearchTerm,
    setMovieList,
    debouncedSearchTerm,
    setDebouncedSearchTerm,
  } = useContext(GlobalContext);

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage("");

    // загрузить фильмы при старте
    const loadMovies = async () => {
      try {
        const data = await fetchMovies(debouncedSearchTerm);
        if (data && data.results) {
          setMovieList(data.results);
        } else {
          setErrorMessage("Failed to load movies");
        }
      } catch (error) {
        setErrorMessage("Error fetching movies");
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, [debouncedSearchTerm]);

  return (
    <section className="all-movies">
      <h2>All Movies</h2>

      <ul>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default AllMovies;

{
  /* <section className="all-movies">
  <h2>All Movies</h2>

  {isLoading ? (
    <Spinner />
  ) : errorMessage ? (
    <p className="text-red-500">{errorMessage}</p>
  ) : (
    <ul>
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )}
</section>; */
}
