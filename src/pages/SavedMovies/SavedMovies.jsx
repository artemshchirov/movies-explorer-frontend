import './SavedMovies.css';
import { useState, useEffect } from 'react';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const SavedMovies = ({
  requestLikeMovies,
  searchQueryMoviesLocal,
  handleLikeMovieClick,
}) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLikeMovies();
  }, []);

  function getLikeMovies() {
    setLoading(true);
    requestLikeMovies()
      .then((movies) => {
        setAllMovies(movies);
        hideErrorMessage();
      })
      .catch(() => {
        showErrorMessage(MESSAGES.ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleFindMovies(values) {
    const movies = filterMovies(likedMovies, SHORT_DURATION, values);
    setMovieList(movies);

    movies?.length ? hideErrorMessage() : showErrorMessage(MESSAGES.NOT_FOUND);
  }

  function showErrorMessage(message) {
    setErrorMessage(message);
  }

  function hideErrorMessage() {
    setErrorMessage(null);
  }

  function handleDeleteMovie(movieId) {
    handleLikeMovieClick(movieId).then(() =>
      setAllMovies(likedMovies.filter((movie) => movie._id !== movieId))
    );
  }

  function setAllMovies(movies) {
    console.log('movies: ', movies);

    setLikedMovies(movies);
    setMovieList(movies);
  }

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader />
        <section className="movies">
          <SearchForm
            handleFindMovies={handleFindMovies}
            searchQueryLocal={searchQueryMoviesLocal}
          />
          <MoviesCardList
            loading={loading}
            cards={movieList}
            btnType={'movie__btn_type_delete'}
            handleLikeMovieClick={handleDeleteMovie}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default SavedMovies;
