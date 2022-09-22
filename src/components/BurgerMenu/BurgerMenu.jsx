import './BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ opened }) => {
  return (
    <>
      <ul className="burger-btn">
        <div className="burger-btn__row"></div>
        <div className="burger-btn__row"></div>
        <div className="burger-btn__row"></div>
      </ul>

      <div className={`burger-menu ${opened ? 'opened' : ''}`}>
        <ul className="burger-menu__links ">
          <li className="burger-menu__item">
            <Link className="burger-menu__link" to="/">
              Главная
            </Link>
          </li>
          <li className="burger-menu__item">
            <Link className="burger-menu__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="burger-menu__item">
            <Link className="burger-menu__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link className="burger-menu__account-btn" to="/profile">
          Аккаунт <span className='burger-menu__account-icon'></span>
        </Link>
      </div>
    </>
  );
};

export default BurgerMenu;
