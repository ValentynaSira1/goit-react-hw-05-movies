import { fetchMovieCast } from '../../Services/FetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import noImages from '../Image/NoImage.jpg';
import { Loader } from '../../components/Loader/Loader';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    try {
      setLoading(true);
      const getMovieCast = async () => {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast.cast);
      };

      getMovieCast();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(true);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
    
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2 className={css.title}>No data from services</h2>}
      <ul className={css.cast}>
        {cast.map(person => {
          return (
            <li key={person.cast_id}>
              <img
                src={
                  person.profile_path
                    ? IMAGES_BASE_URL + person.profile_path
                    : noImages
                }
                alt={person.name}
                width="80"
              />

              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;