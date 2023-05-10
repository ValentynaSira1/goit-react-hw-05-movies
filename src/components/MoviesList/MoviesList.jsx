import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, state }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => {
        const title = movie.title ?? movie.name;
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: state.from }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  state: PropTypes.shape({
    from: PropTypes.string,
  }),
};