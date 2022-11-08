import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__link-box">
        <a
          className="footer__link focus-effect"
          href="https://practicum.yandex.ru/"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          className="footer__link focus-effect"
          href="https://github.com/ArtyemSavchenko"
          target="_blank"
          rel="noreferrer me"
        >
          Github
        </a>
        <p className="footer__year">© 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
