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
      <header className="header">
        <Link className="header__logo" to={'/'}>
          <img src={logo} alt="Логотип 'Movies Explorer'" />
        </Link>

        <nav className="header__nav">
          <ul className="header__links">
            <li>
              <Link
                className="header__link header__link_order_first"
                to="/movies"
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                className="header__link header__link_order_last"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </Link>
            </li>
            <li>
              <Link className="header__link profile" to="/profile">
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="header__burger-menu" onClick={toggleHamburger}>
        <BurgerMenu isOpen={burgerMenuOpen} />
      </div>
    </>
  );
};

export default Header;
