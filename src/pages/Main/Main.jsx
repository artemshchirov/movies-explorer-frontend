import './Main.css';
import MainHeader from '../../components/Header/MainHeader/MainHeader';
import MoviesHeader from '../../components/Header/MoviesHeader/MoviesHeader';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

function Main({ authorized }) {
  return (
    <>
      <div className="content-wrapper">
        {authorized ? <MoviesHeader /> : <MainHeader />}
        <main>
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Main;
