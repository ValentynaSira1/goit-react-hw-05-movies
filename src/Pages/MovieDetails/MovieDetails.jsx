import { fetchMovieById } from '../../Services/FetchMovies';
import { Loader } from '../../components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import noImages from '../../components/Image/NoImage.jpg';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
let genres = '';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/movies');
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      try {
        const movieInfo = await fetchMovieById(movieId);
        genres = movieInfo.data.genres.map(genre => genre.name).join(' ');
        setMovie(movieInfo.data);
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

    getMovie();
  }, [movieId]);

  const releaseYear = new Date(movie.release_date).getFullYear();
  const userScore = Math.floor(movie.vote_average * 10);

  return (
    <div>
      <Link to={backLocation.current} className={css.button}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          {error ? (
            <h2>No information for this movie</h2>
          ) : (
            <>
              <div className={css.movie_box}>
                <div className={css.img_box}>
                  <img
                    src={
                      movie.poster_path
                        ? IMAGES_BASE_URL + movie.poster_path
                        : noImages
                    }
                    alt={movie.title}
                  />
                </div>
                <div className={css.info_box}>
                  <h2>
                    {movie.title} ({releaseYear})
                  </h2>
                  <p>User Score: {userScore} %</p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h4>Genres</h4>
                  <p>{genres}</p>
                </div>
              </div>
              <div className={css.additional}>
                <h4>Additional information</h4>
                <ul className={css.additional_list}>
                  <li>
                    <Link to="cast">Cast</Link>
                  </li>
                  <li>
                    <Link to="reviews">Reviews</Link>
                  </li>
                </ul>
              </div>

              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;