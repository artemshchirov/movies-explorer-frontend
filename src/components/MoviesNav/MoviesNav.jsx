import './MoviesNav.css';
import Nav from '../Nav/Nav';
import LinkContainer from '../LinkContainer/LinkContainer';
import CustomLink from '../CustomLink/CustomLink';

function MoviesNav() {
  return (
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
}

export default MoviesNav;
