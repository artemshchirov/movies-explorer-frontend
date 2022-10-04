import './SavedMovies.css';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';

const movies = [
  {
    id: 0,
    link: './images/movies/movie-img-0.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 1,
    link: './images/movies/movie-img-1.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 2,
    link: './images/movies/movie-img-2.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
];

const SavedMovies = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <div className="content-wrapper">
        <MoviesHeader />
        <section className="movies">
          <SearchForm onSubmit={handleSubmit} />
          <MoviesCardList
            cards={movies}
            cardsAmount={movies.length}
            btnType={'movie__btn_type_delete'}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default SavedMovies;
