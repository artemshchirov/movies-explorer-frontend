import './MainHeader.css';
import Header from '../Header.jsx';
import Logo from '../../Logo/Logo.jsx';
import SignNav from '../../SignNav/SignNav.jsx';
import CustomLink from '../../CustomLink/CustomLink';

const MainHeader = () => (
  <Header className="header_main">
    <CustomLink path="/">
      <Logo />
    </CustomLink>
    <SignNav />
  </Header>
);

export default MainHeader;
