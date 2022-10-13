import './SavedMovies.css';
import { useState, useEffect } from 'react';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import { filterMovies } from '../../utils/filterMovies';
import { MESSAGES, SHORT_DURATION } from '../../utils/constants';

const SavedMovies = ({
  requestLikeMovies,
  searchQueryLocal,
  handleLikeMovieClick,
  showAlert,
}) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);

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
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage(MESSAGES.ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleFindMovies(values) {
    const movies = filterMovies(likedMovies, SHORT_DURATION, values);
    setDisplayedMovies(movies);

    movies?.length ? setErrorMessage('') : setErrorMessage(MESSAGES.NOT_FOUND);
  }

  function handleDeleteMovie(movieId) {
    handleLikeMovieClick(movieId).then(() =>
      setAllMovies(likedMovies.filter((movie) => movie._id !== movieId))
    );
  }

  function setAllMovies(movies) {
    setLikedMovies(movies);
    setDisplayedMovies(movies);
  }

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader />
        <section className="movies">
          <SearchForm
            handleFindMovies={handleFindMovies}
            searchQueryLocal={searchQueryLocal}
            showAlert={showAlert}
          />
          <MoviesCardList
            loading={loading}
            cards={displayedMovies}
            btnType={'movie__btn_type_delete'}
            handleLikeMovieClick={handleDeleteMovie}
            message={errorMessage}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default SavedMovies;
