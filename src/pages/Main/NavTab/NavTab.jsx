import './NavTab.css';
import CustomLink from '../../../components/CustomLink/CustomLink';

function NavTab() {
  return (
    <section className="navtab">
      <nav>
        <ul className="nav__links">
          <li>
            <CustomLink className="nav__link" path="#about">
              О проекте
            </CustomLink>
          </li>
          <li>
            <CustomLink className="nav__link" path="#techs">
              Технологии
            </CustomLink>
          </li>
          <li>
            <CustomLink className="nav__link nav__link_last" path="#profile">
              Студент
            </CustomLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
