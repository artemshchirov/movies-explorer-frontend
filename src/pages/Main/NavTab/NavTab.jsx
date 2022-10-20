import './NavTab.css';

import LinkContainer from '../../../components/LinkContainer/LinkContainer';
import CustomLink from '../../../components/CustomLink/CustomLink';

function NavTab() {
  return (
    <section className="navtab">
      <nav>
        <ul className="nav__links">
          <LinkContainer>
            <CustomLink className="nav__link" path="#about">
              О проекте
            </CustomLink>
          </LinkContainer>
          <LinkContainer>
            <CustomLink className="nav__link" path="#techs">
              Технологии
            </CustomLink>
          </LinkContainer>
          <LinkContainer>
            <CustomLink className="nav__link nav__link_last" path="#profile">
              Студент
            </CustomLink>
          </LinkContainer>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
