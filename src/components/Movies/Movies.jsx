import './Movies.css';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import MoviesHeader from '../header/MoviesHeader/MoviesHeader.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
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
  {
    id: 3,
    link: './images/movies/movie-img-3.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 4,
    link: './images/movies/movie-img-4.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 5,
    link: './images/movies/movie-img-5.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 6,
    link: './images/movies/movie-img-6.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 7,
    link: './images/movies/movie-img-7.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 8,
    link: './images/movies/movie-img-8.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 9,
    link: './images/movies/movie-img-9.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 10,
    link: './images/movies/movie-img-10.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
  {
    id: 11,
    link: './images/movies/movie-img-11.png',
    title: '33 слова о дизайне',
    duration: '1ч 47м',
  },
];

const Movies = () => {
  const { values, setValues, handleChange } = useForm;
  const [cardsAmount, setCardsAmount] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

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
  });

  return (
    <>
      <MoviesHeader />
      <section className="movies">
        <SearchForm onSubmit={handleSubmit} />
        <MoviesCardList
          cards={movies}
          cardsAmount={cardsAmount}
          btnType={'movie__btn_type_save'}
        />
        <section className="movies__load">
          <button className="movies__btn">Ещё</button>
        </section>
      </section>
      <Footer />
    </>
  );
};
export default Movies;
