import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../appwrite";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      console.log(movies);
      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  };

  // console.log(trendingMovies);

  return (
    trendingMovies.length > 0 && (
      <section className="trending">
        <h2>Trending Movies</h2>

        <ul>
          {trendingMovies.map((movie, index) => (
            <li key={movie.$id}>
              <p>{index + 1}</p>
              <img src={movie.poster_url} alt={movie.title} />
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

export default TrendingMovies;

// const loadTrendingMovies = async () => {
//     try {
//       const movies = await getTrendingMovies();

//       setTrendingMovies(movies);
//     } catch (error) {
//       console.error(`Error fetching trending movies: ${error}`);
//     }
//   }
