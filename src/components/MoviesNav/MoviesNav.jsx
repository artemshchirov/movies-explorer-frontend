import './MoviesNav.css';
import Nav from '../Nav/Nav.jsx';
import LinkContainer from '../LinkContainer/LinkContainer.jsx';
import CustomLink from '../CustomLink/CustomLink.jsx';

const MoviesNav = () => (
  <Nav className="nav_movies">
    <LinkContainer>
      <CustomLink className="link_movies link_order_first" path="/movies">
        Фильмы
      </CustomLink>
    </LinkContainer>
    <LinkContainer>
      <CustomLink className="link_movies" path="/saved-movies">
        Сохраненные фильмы
      </CustomLink>
    </LinkContainer>
  </Nav>
);

export default MoviesNav;
