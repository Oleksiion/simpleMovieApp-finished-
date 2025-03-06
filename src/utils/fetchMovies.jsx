import { updateSearchCount } from "../appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchMovies = async (query = "") => {
  try {
    const endpoint = query
      ? //запрос на поиск конкретного фильма
        `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : // запрос на поиск всех фильмов
        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    if (query && data.results.length > 0) {
      await updateSearchCount(query, data.results[0]);
      console.log(query);
    }

    return data;
    // получаем объект из которого потом вытащим резалт
  } catch (error) {
    console.error(`Error fetching movies: ${error}`);
  }
};
