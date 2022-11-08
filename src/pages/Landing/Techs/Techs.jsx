import './Techs.css';

import HeadingUnderlined from '../HeadingUnderlined/HeadingUnderlined';
import BaseText from '../BaseText/BaseText';
import Tech from '../Tech/Tech';

import { generateId } from '../../../utils/generateId';

const TECHS = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'MongoDB'];

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
        {TECHS.map((tech) => (
          <Tech key={generateId()}>{tech}</Tech>
        ))}
      </div>
    </section>
  );
};

export default Techs;
