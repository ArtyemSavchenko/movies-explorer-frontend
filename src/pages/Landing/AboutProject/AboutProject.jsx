import './AboutProject.css';

import HeadingUnderlined from '../HeadingUnderlined/HeadingUnderlined';

const AboutProject = () => {
  return (
    <section className="about-project">
      <HeadingUnderlined>О проекте</HeadingUnderlined>
      <div className="about-project__text-content-box">
        <div className="about-project__text-box">
          <h3 className="about-project__subheading">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__text-box">
          <h3 className="about-project__subheading">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__paragraph">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time-line">
        <p className="about-project__duration about-project__duration_accent">
          1&nbsp;неделя
        </p>
        <p className="about-project__duration">4&nbsp;недели</p>
        <p className="about-project__time-line-caption">Back-end</p>
        <p className="about-project__time-line-caption">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
