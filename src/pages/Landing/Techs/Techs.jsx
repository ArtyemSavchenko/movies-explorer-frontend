import './Techs.css';

import HeadingUnderlined from '../HeadingUnderlined/HeadingUnderlined';
import BaseText from '../BaseText/BaseText';
import Tech from '../Tech/Tech';

const Techs = () => {
  return (
    <section className="techs">
      <HeadingUnderlined>Технологии</HeadingUnderlined>
      <h3 className="techs__subheading">7&nbsp;технологий</h3>
      <BaseText>
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
        применили в&nbsp;дипломном проекте.
      </BaseText>
      <div className="techs__techs-box">
        <Tech>HTML</Tech>
        <Tech>CSS</Tech>
        <Tech>JS</Tech>
        <Tech>React</Tech>
        <Tech>Git</Tech>
        <Tech>Express.js</Tech>
        <Tech>MongoDB</Tech>
      </div>
    </section>
  );
};

export default Techs;
