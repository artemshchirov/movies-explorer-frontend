import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';

const MoviesCardList = ({ loading, btnType, cards, handleLikeMovieClick }) => {
  const [cardsAmount, setCardsAmount] = useState(0);

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

  if (loading) return <Preloader />;

  return (
    <section className="movie-cards">
      {cards.slice(0, cardsAmount).map((movie) => (
        <MoviesCard
          key={movie.id || movie._id}
          movie={movie}
          btnType={btnType}
          handleLikeMovieClick={handleLikeMovieClick}
        />
      ))}
    </section>
  );
};

export default MoviesCardList;
