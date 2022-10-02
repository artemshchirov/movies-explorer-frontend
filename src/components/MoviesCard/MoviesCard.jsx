import './MoviesCard.css';

const MoviesCard = ({
  link, title, duration, btnType,
}) => (
  <article className="movie">
    <div className="movie__container">
      <div className="movie__wrapper">
        <p className="movie__title">{title}</p>
        <p className="movie__subtitle">{duration}</p>
      </div>
      <button className={`movie__btn ${btnType}`}></button>
    </div>
    <img className="movie__image" src={link} alt="#" />
  </article>
);

export default MoviesCard;
