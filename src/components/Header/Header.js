import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <>
      <header className="header">
        <Link className="header__logo" to={'/'}>
          <img src={logo} alt="Логотип 'Movies Explorer'" />
        </Link>

        <nav className="header__nav">
          <ul className="header__links">
            <li>
              <Link className="header__link header__link_first" to="/movies">
                Фильмы
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="header__link account" to="/profile">
          Аккаунт <span className="header__link-icon"></span>
        </Link>
      </header>

      <div className="header__burger-menu" onClick={toggleHamburger}>
        <BurgerMenu isOpen={burgerMenuOpen} />
      </div>
    </>
  );
};

export default Header;
