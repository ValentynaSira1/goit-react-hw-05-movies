import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const URL = 'https://api.themoviedb.org/3/trending/all/day';
  const KEY = '3a46a7267a5317e24c5053073610996d';

  const options = new URLSearchParams({
    api_key: KEY,
  });
  try {
    const TrendingMovies = await axios.get(`${URL}?${options}`);
    return TrendingMovies.data.results;
  } catch (error) {
    console.log(error);
  }
};


export const fetchMovieById = async (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  const KEY = '3a46a7267a5317e24c5053073610996d';

  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie;
  } catch (error) {
    console.log(error);
  }
};



export const fetchMovieCast = async (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const KEY = '3a46a7267a5317e24c5053073610996d';

  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const KEY = '3a46a7267a5317e24c5053073610996d';

  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async search => {
  const URL = `https://api.themoviedb.org/3/search/movie`;
  const KEY = '3a46a7267a5317e24c5053073610996d';

  const options = new URLSearchParams({
    api_key: KEY,
    query: search,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie.data.results;
  } catch (error) {
    console.log(error);
  }
};

