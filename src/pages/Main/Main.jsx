import './Main.css';
import MainHeader from '../../components/Header/MainHeader/MainHeader.jsx';
import Promo from './Promo/Promo.jsx';
import NavTab from './NavTab/NavTab.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Main = () => (
  <>
    <div className="content-wrapper">
      <MainHeader />
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

export default Main;
