import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <a href="https://artemschirov.github.io/mesto/index.html">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип 'Movies Explorer'"
        />
      </a>
      <div className="header__wrapper">
        <div className="header__nav">
          <Link className="header__nav-link" to={'/movies'}>
            Фильмы
          </Link>
          <Link className="header__nav-link" to={'/saved-movies'}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link className="header__profile-link">Аккаунт</Link>
      </div>
    </div>
  );
};

export default Header;
