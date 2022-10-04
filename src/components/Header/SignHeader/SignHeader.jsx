import './SignHeader.css';
import Header from '../Header.jsx';
import Logo from '../../Logo/Logo.jsx';
import Title from '../../Title/Title.jsx';

const SignHeader = ({ title }) => (
  <Header className="header_sign">
    <Logo />
    <Title text={title} className="title_type_main" />
  </Header>
);

export default SignHeader;
