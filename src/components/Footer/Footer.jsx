import './Footer.css';
import CustomLink from '../CustomLink/CustomLink';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__companies">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__wrapper">
        <CustomLink
          className="footer__copyright"
          path="https://github.com/artemshchirov"
        >
          &copy; Ɐrtem Shchirov 2022
        </CustomLink>
        <div className="footer__nav">
          <CustomLink
            className="footer__nav-link"
            path="https://practicum.com/en-isr/"
          >
            Яндекс.Практикум
          </CustomLink>
          <CustomLink
            className="footer__nav-link"
            path="https://github.com/artemshchirov/movies-explorer-frontend"
          >
            Github
          </CustomLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
