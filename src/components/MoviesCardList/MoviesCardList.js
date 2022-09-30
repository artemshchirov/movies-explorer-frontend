import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cards, cardsAmount, btnType }) => (
  <section className="movie-cards">
    {cards.slice(0, cardsAmount).map((card) => (
      <MoviesCard key={card.id} {...card} btnType={btnType} />
    ))}
  </section>
);

export default MoviesCardList;
