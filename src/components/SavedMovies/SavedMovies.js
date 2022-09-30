import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

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

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSubmit} />
      <MoviesCardList
        cards={movies}
        cardsAmount={movies.length}
        btnType={'movie__btn_type_delete'}
      />
    </section>
  );
};
export default SavedMovies;
