import './MoviesHeader.css';
import { useState } from 'react';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import Header from '../Header';
import Logo from '../../Logo/Logo';
import CustomLink from '../../CustomLink/CustomLink';
import MoviesNav from '../../MoviesNav/MoviesNav';

function MoviesHeader() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <Header>
      <Logo />
      <MoviesNav />
      <CustomLink className="link_movies link_type_profile" path="/profile">
        Профиль <span className="link_icon" />
      </CustomLink>
      <div className="header__burger-menu" onClick={toggleHamburger}>
        <BurgerMenu isOpen={burgerMenuOpen} />
      </div>
    </Header>
  );
}

export default MoviesHeader;
