import { fetchMovieReviews } from '../../Services/FetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { Loader } from '../../components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    try {
      setLoading(true);
      const getMovieReviews = async () => {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews.results);
      };

      getMovieReviews();
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

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie </p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2 className={css.title}>No data from services</h2>}
      <ul className={css.reviews}>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>Character: {review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;