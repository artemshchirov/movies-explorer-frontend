import './Main.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

const Main = () => {
  return (
    <>
      <header className="header">
        <Link to={'/'}>
          <img
            className="header__logo"
            src={logo}
            alt="Логотип 'Movies Explorer'"
          />
        </Link>

        <ul className="header__links">
          <li>
            <Link className="header__register" to="/signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link className="header__login" to="/signin">
              <button className="header__login-btn">Войти</button>
            </Link>
          </li>
        </ul>
      </header>
      <main className="content page__content">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </>
  );
};

export default Main;
