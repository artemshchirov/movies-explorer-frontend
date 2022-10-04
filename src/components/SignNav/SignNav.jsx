import './SignNav.css';
import Nav from '../Nav/Nav.jsx';
import LinkContainer from '../LinkContainer/LinkContainer.jsx';
import CustomLink from '../CustomLink/CustomLink.jsx';

const SignNav = () => (
  <Nav>
    <LinkContainer>
      <CustomLink className="link_main link_type_signup" path="/signup">
        Регистрация
      </CustomLink>
    </LinkContainer>
    <LinkContainer>
      <CustomLink className="link_main link_type_signin" path="/signin">
        Войти
      </CustomLink>
    </LinkContainer>
  </Nav>
);

export default SignNav;
