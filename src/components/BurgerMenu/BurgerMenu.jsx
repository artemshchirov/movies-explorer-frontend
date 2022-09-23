import './BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ isOpen }) => {
  return (
    <>
      <ul className="burger-btn">
        <div className="burger-btn__row burger-btn__row_order_first"></div>
        <div className="burger-btn__row burger-btn__row_order_second"></div>
        <div className="burger-btn__row burger-btn__row_order_third"></div>
      </ul>

      <style jsx="true">
        {`
          .burger-btn__row_order_first {
            transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          }

          .burger-btn__row_order_second {
            transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${isOpen ? 0 : 1};
          }

          .burger-btn__row_order_third {
            transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
          }
        `}
      </style>

      <div className={`burger-menu ${isOpen ? 'opened' : ''}`}>
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
          Аккаунт <span className="burger-menu__account-icon"></span>
        </Link>
      </div>

      <div className={`overlay ${isOpen ? 'visible' : ''}`}></div>
    </>
  );
};

export default BurgerMenu;
