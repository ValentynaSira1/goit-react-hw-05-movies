import { fetchSearchMovies } from '../../Services/FetchMovies';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './Movies.module.css';
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = searchParams.get('query');

  const handleChange = e => {
    setSearch(e.target.value.trim());
    if (e.target.value === '') {
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (!params) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const searchedMovies = await fetchSearchMovies(params);
        if (searchedMovies.length === 0) {
          return toast.error(`No movies found for '${params}'`);
        }
        setMovies(searchedMovies);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(true);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [params]);

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      return toast.error(`Please enter a movie name`);
    }

    setSearchParams({ query: search });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={search}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      {error && <h2>No data from services</h2>}
      {movies.length > 0 && params && (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
    </div>
  );
};

export default Movies;