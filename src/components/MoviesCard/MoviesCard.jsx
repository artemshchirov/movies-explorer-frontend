import './MoviesCard.css';
import Button from '../Button/Button.jsx';

const MoviesCard = ({
  link, title, duration, btnType,
}) => (
  <article className="movie">
    <div className="movie__container">
      <div className="movie__wrapper">
        <p className="movie__title">{title}</p>
        <p className="movie__subtitle">{duration}</p>
      </div>
      <Button className={`movie__btn ${btnType}`} />
    </div>
    <img className="movie__image" src={link} alt="movie" />
  </article>
);

export default MoviesCard;
