import './Portfolio.css';

import { generateId } from '../../../utils/generateId';

import PortfolioLink from '../PortfolioLink/PortfolioLink';

const LINKS = [
  {
    name: 'Статичный сайт',
    link: 'https://github.com/ArtyemSavchenko/mrc-zdorovie',
  },
  {
    name: 'Адаптивный сайт',
    link: 'https://github.com/ArtyemSavchenko/mrc-zdorovie',
  },
  {
    name: 'Одностраничное приложение',
    link: 'https://github.com/ArtyemSavchenko/mrc-zdorovie',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__list">
        {LINKS.map((item) => (
          <li key={generateId()}>
            <PortfolioLink href={item.link} target="_blank">
              {item.name}
            </PortfolioLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
