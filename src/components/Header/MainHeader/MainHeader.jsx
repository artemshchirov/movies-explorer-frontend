import './MainHeader.css';
import Header from '../Header/Header.jsx';
import Logo from '../../Logo/Logo.jsx';
import SignNav from '../../SignNav/SignNav.jsx';

const MainHeader = () => (
  <Header className="header_main">
    <Logo />
    <SignNav />
  </Header>
);

export default MainHeader;
