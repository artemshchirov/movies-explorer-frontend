import './Movies.css';
import { useEffect, useState, useMemo } from 'react';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Button from '../../components/Button/Button.jsx';

import { filterMovies } from '../../utils/filterMovies';
import { formatLikedMovies, setLike } from '../../utils/likes';
import {
  MESSAGES,
  CARD_COUNT,
  CARD_BREAKPOINT,
  SHORT_DURATION,
} from '../../utils/constants';
import { useCardCount } from '../../hooks/useCardCount';

const Movies = ({
  loading,
  setLoading,
  moviesLocal,
  searchQueryLocal,
  requestAllMovies,
  requestLikeMovies,
  handleLikeMovieClick,
  showAlert,
}) => {
  const [movieList, setMovieList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');
  const [queryValues, setQueryValues] = useState({});
  
  const { countAddMovies, startCountMovies, setParamsCountMovies } =
    useCardCount(CARD_COUNT, CARD_BREAKPOINT);

  useEffect(() => {
    getLikeMovies();
    setParamsCountMovies('all');
    window.addEventListener('resize', setParamsCountMovies);
    return () => window.removeEventListener('resize', setParamsCountMovies);
  }, []);

  // Load movies from local storage
  useEffect(() => {
    if (likedMovies && !loading) {
      const localMovies = moviesLocal.load();
      setFilteredMovieList(localMovies);
    }
  }, [likedMovies, loading]);

  // Filter movies
  useEffect(() => {
    if (movieList?.length && queryValues) {
      const movies = filterMovies(movieList, SHORT_DURATION, queryValues);
      moviesLocal.save(movies);
      setFilteredMovieList(movies);

      movies?.length
        ? setErrorMessage('')
        : setErrorMessage(MESSAGES.NOT_FOUND);
    }
  }, [movieList, queryValues]);

  // Show movies
  useEffect(() => {
    if (filteredMovieList?.length) {
      const movies = setLike(filteredMovieList, likedMovies);
      setDisplayedMovies([...movies.slice(0, startCountMovies)]);
    }
  }, [filteredMovieList, startCountMovies]);

  function getLikeMovies() {
    // setLoading(true);
    requestLikeMovies()
      .then((movies) => {
        setLikedMovies(formatLikedMovies(movies));
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage(MESSAGES.ERROR);
      })
      .finally(() => {
        // setLoading(false);
      });
  }

  function getAllMovies() {
    // setLoading(true);
    requestAllMovies()
      .then((movies) => {
        setMovieList(movies);
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage(MESSAGES.ERROR);
      })
      .finally(() => {
        // setLoading(false);
      });
  }

  function handleFindMovies(values) {
    if (!movieList?.length) getAllMovies();
    setQueryValues(values);
  }

  function showMoreMovies() {
    const startIndex = displayedMovies.length;
    const endIndex = startIndex + countAddMovies;

    setDisplayedMovies([
      ...displayedMovies,
      ...filteredMovieList.slice(startIndex, endIndex),
    ]);
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
            btnType={'movie__btn_type_save'}
            handleLikeMovieClick={handleLikeMovieClick}
            message={errorMessage}
          />
          <section className="movies__load">
            {filteredMovieList &&
              filteredMovieList?.length > 3 &&
              filteredMovieList?.length !== displayedMovies?.length && (
                <Button
                  className="movies__btn"
                  btnType={'movie__btn_type_save'}
                  title="Ещё"
                  onClick={showMoreMovies}
                />
              )}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Movies;
