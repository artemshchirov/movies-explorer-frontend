import './Movies.css';
import useForm from '../../hooks/useForm';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';

const Movies = () => {
  const { values, setValues, handleChange } = useForm;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const cards = [
    { id: 0, src: './images/movies/movie-img-0.png' },
    { id: 1, src: './images/movies/movie-img-1.png' },
    { id: 2, src: './images/movies/movie-img-2.png' },
    { id: 3, src: './images/movies/movie-img-3.png' },
    { id: 4, src: './images/movies/movie-img-4.png' },
    { id: 5, src: './images/movies/movie-img-5.png' },
    { id: 6, src: './images/movies/movie-img-6.png' },
    { id: 7, src: './images/movies/movie-img-7.png' },
    { id: 8, src: './images/movies/movie-img-8.png' },
    { id: 9, src: './images/movies/movie-img-9.png' },
    { id: 10, src: './images/movies/movie-img-10.png' },
    { id: 11, src: './images/movies/movie-img-11.png' },
  ];

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSubmit} />
      <section className="movie-cards">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </section>
      <section className='movies__load'>
        <button className='movies__btn'>Ещё</button>
      </section>
    </section>
  );
};
export default Movies;
