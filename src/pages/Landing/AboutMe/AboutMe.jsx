import './AboutMe.css';

import photo from '../../../images/about-me-photo.webp';

import HeadingUnderlined from '../HeadingUnderlined/HeadingUnderlined';
import BaseText from '../BaseText/BaseText';

const AboutMe = () => {
  return (
    <section className="about-me">
      <HeadingUnderlined>Студент</HeadingUnderlined>
      <figure className="about-me__info-box">
        <img className="about-me__photo" src={photo} alt="Портрет студента." />
        <figcaption className="about-me__caption-box">
          <h3 className="about-me__name">Артём</h3>
          <BaseText>Фронтенд-разработчик, 33 года</BaseText>
          <BaseText>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </BaseText>
          <a
            className="about-me__git-link"
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
