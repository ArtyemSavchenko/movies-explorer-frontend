import photo from '../../../images/about-me-photo.webp';

import HeadingUnderlined from '../HeadingUnderlined/HeadingUnderlined';
import BaseText from '../BaseText/BaseText';

import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <HeadingUnderlined extraClass='about-me__heading'>Студент</HeadingUnderlined>
      <figure className="about-me__info-box">
        <img className="about-me__photo" src={photo} alt="Портрет студента." />
        <figcaption className="about-me__caption-box">
          <h3 className="about-me__name">Артём</h3>
          <BaseText extraClass="about-me__profession">Фронтенд-разработчик, 33 года</BaseText>
          <BaseText extraClass="about-me__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Таганроге, отучился в&nbsp;ТРТУ.
            После учёбы зарабатывал игрой в&nbsp;покер. Было интересно,
            но&nbsp;время игр прошло. Теперь я&nbsp;плотно изучаю фронтенд. Есть
            планы очень быстро расти как разработчик. Я&nbsp;обязательно стану
            хокаге.
          </BaseText>
          <a
            className="about-me__git-link focus-effect"
            href="https://github.com/ArtyemSavchenko"
            target="_blank"
            rel="me noreferrer"
          >
            Github
          </a>
        </figcaption>
      </figure>
    </section>
  );
};

export default AboutMe;
