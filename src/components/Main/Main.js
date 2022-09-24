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
      <header className="header-landing">
        <div className="header-landing__wrapper">
          <Link className="header-landing__logo" to={'/'}>
            <img src={logo} alt="Логотип 'Movies Explorer'" />
          </Link>

          <ul className="header-landing__links">
            <li>
              <Link className="header-landing__register link" to="/signup">
                Регистрация
              </Link>
            </li>
            <li>
              <Link className="header-landing__login" to="/signin">
                <button className="header-landing__login-btn link">
                  Войти
                </button>
              </Link>
            </li>
          </ul>
        </div>
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
