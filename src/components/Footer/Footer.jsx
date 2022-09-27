import './Footer.css';

const Footer = () => (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__companies">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__wrapper">
        <a
          className="footer__copyright"
          href="https://github.com/artemshchirov"
          target="_blank"
          rel="noreferrer"
        >
          &copy; Ɐrtem Shchirov 2022
        </a>
        <div className="footer__nav">
          <a
            className="footer__nav-link"
            href="https://www.example.com/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__nav-link"
            href="https://www.example.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
);

export default Footer;
