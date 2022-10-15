import './MainHeader.css';
import Header from '../Header';
import Logo from '../../Logo/Logo';
import SignNav from '../../SignNav/SignNav';

function MainHeader() {
  return (
    <Header className="header_main">
      <Logo />
      <SignNav />
    </Header>
  );
}

export default MainHeader;
