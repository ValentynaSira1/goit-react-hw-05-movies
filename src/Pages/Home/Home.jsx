import { fetchTrendingMovies } from '../../Services/FetchMovies';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    try {
      setLoading(true);
      const getMovies = async () => {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      };

      getMovies();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(true);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2 className={css.title}>No data from services</h2>}
      <h2 className={css.title}>Trending today</h2>
      {trendingMovies.length > 0 && (
        <MoviesList movies={trendingMovies} state={{ from: location }} />
      )}
    </>
  );
};

export default Home;
