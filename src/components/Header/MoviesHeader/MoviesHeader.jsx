import './MoviesHeader.css';
import { useState } from 'react';
import BurgerMenu from '../../BurgerMenu/BurgerMenu.jsx';
import Header from '../Header.jsx';
import Logo from '../../Logo/Logo.jsx';
import CustomLink from '../../CustomLink/CustomLink.jsx';
import MoviesNav from '../../MoviesNav/MoviesNav.jsx';

const MoviesHeader = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleHamburger = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <Header>
      <Logo />
      <MoviesNav />
      <CustomLink className="link_movies link_type_profile" path="/profile">
        Профиль <span className='link_icon'></span>
      </CustomLink>
      <div className="header__burger-menu" onClick={toggleHamburger}>
        <BurgerMenu isOpen={burgerMenuOpen} />
      </div>
    </Header>
  );
};

export default MoviesHeader;
