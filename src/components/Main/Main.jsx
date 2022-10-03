import './Main.css';
import MainHeader from '../Header/MainHeader/MainHeader.jsx';
import Promo from './Promo/Promo.jsx';
import NavTab from './NavTab/NavTab.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Footer from '../Footer/Footer.jsx';

const Main = () => (
  <>
    <MainHeader />
    <main className="content page__content">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
    <Footer />
  </>
);

export default Main;
