import './SignNav.css';
import Nav from '../Nav/Nav';
import LinkContainer from '../LinkContainer/LinkContainer';
import CustomLink from '../CustomLink/CustomLink';

function SignNav() {
  return (
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
}

export default SignNav;
