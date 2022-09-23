import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <>
      <div className="header">
        <Link to={'/'}>
          <img
            className="header__logo"
            src={logo}
            alt="Логотип 'Movies Explorer'"
          />
        </Link>

        <div className="header__wrapper">
          <div className="header__nav">
            <Link className="header__nav-link" to="/movies">
              Фильмы
            </Link>
            <Link className="header__nav-link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </div>
          <Link className="header__profile-link" to="/profile">
            Аккаунт
          </Link>
        </div>
      </div>

      <div className="header__burger-menu" onClick={toggleHamburger}>
        <BurgerMenu isOpen={burgerMenuOpen} />
      </div>

      
    </>
  );
};

export default Header;
