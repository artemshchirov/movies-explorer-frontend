import './Movies.css';
import { useEffect, useState, useMemo } from 'react';
// import useForm from '../../hooks/useForm';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import Preloader from './Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';
import Button from '../Button/Button.jsx';
import getContent from '../../utils/MoviesApi';

const Movies = ({ isLoading, setIsLoading, searchQueryMoviesLocal }) => {
  const [movieList, setMovieList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);

  useEffect(() => {
    if (movieList) return;
    setIsLoading(false);
    async function fetchMovies() {
      try {
        const movies = await getContent();

        localStorage.setItem('movies', movies);
        setMovieList(movies);
      } catch {
        console.error(`Ошибка получения контента пользователя: ${err}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const [cardsAmount, setCardsAmount] = useState(0);

  const handleFindMovies = (query) => {};

  const updateMedia = () => {
    if (window.innerWidth >= 1279) {
      setCardsAmount(12);
    } else if (window.innerWidth >= 767) {
      setCardsAmount(8);
    } else {
      setCardsAmount(5);
    }
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader />
        <section className="movies">
          <SearchForm
            handleFindMovies={handleFindMovies}
            searchQueryLocal={searchQueryMoviesLocal}
          />

          {isLoading ? (
            <Preloader />
          ) : movieList.length === 0 ? (
            <p style={{ color: 'cyan' }}>
              Во&nbsp;время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного
              и&nbsp;попробуйте ещё раз
            </p>
          ) : (
            <>
              <MoviesCardList
                cards={movieList}
                cardsAmount={cardsAmount}
                btnType={'movie__btn_type_save'}
              />
              <section className="movies__load">
                <Button className="movies__btn" title="Ещё" />
              </section>
            </>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Movies;
