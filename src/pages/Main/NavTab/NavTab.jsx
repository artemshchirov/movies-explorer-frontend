import './NavTab.css';
import { Link } from 'react-router-dom';

const NavTab = () => (
  <section className="navtab">
    <nav>
      <ul className="nav__links">
        <li>
          <Link className="nav__link" to="#about">
            О проекте
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="#techs">
            Технологии
          </Link>
        </li>
        <li>
          <Link className="nav__link nav__link_last" to="#student">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default NavTab;
