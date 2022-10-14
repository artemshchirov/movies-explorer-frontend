import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';

const MoviesCardList = ({
  loading,
  btnType,
  cards,
  handleLikeMovieClick,
  message = 'test',
}) => {
  return (
    <>
      {message ? (
        <p className="movie-cards__alert">{message}</p>
      ) : loading ? (
        <Preloader />
      ) : (
        <section className="movie-cards">
          {cards?.map((movie) => (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              btnType={btnType}
              handleLikeMovieClick={handleLikeMovieClick}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default MoviesCardList;
