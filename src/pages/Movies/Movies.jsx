import './Movies.css';
import { useEffect, useState, useMemo } from 'react';
// import useForm from '../../hooks/useForm';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Button from '../../components/Button/Button.jsx';
import MainApi from '../../utils/MainApi';

const Movies = ({
  loading,
  setLoading,
  moviesLocal,
  searchQueryMoviesLocal,
  requestAllMovies,
  handleLikeMovieClick,
}) => {
  const [movieList, setMovieList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);

  useEffect(() => {
    if (movieList.length > 0) return;

    setLoading(false);
    async function fetchMovies() {
      try {
        const movies = await requestAllMovies();
        console.log('movies: ', movies);
        moviesLocal.save(movies);
        setMovieList(movies);
      } catch (err) {
        console.error(`Ошибка получения контента пользователя: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    const localMovies = moviesLocal.load();

    if (!localMovies) {
      fetchMovies();
    } else {
      setMovieList(localMovies);
    }
  }, []);

  const handleFindMovies = (query) => {
    console.log('query: ', query, 'movieList: ', movieList);
  };

  if (loading) return <Preloader />;

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader />
        <section className="movies">
          <SearchForm
            handleFindMovies={handleFindMovies}
            searchQueryLocal={searchQueryMoviesLocal}
          />

          {movieList.length === 0 ? (
            <p style={{ color: 'cyan' }}>
              Во&nbsp;время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного
              и&nbsp;попробуйте ещё раз
            </p>
          ) : (
            <>
              <MoviesCardList
                loading={loading}
                cards={movieList}
                btnType={'movie__btn_type_save'}
                handleLikeMovieClick={handleLikeMovieClick}
              />
              <section className="movies__load">
                <Button
                  className="movies__btn"
                  btnType={'movie__btn_type_save'}
                  title="Ещё"
                />
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
