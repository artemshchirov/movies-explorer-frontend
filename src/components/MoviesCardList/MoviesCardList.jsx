import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  loading,
  btnType,
  cards,
  handleLikeMovieClick,
  message,
}) {
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
}

export default MoviesCardList;
