import MovieCard from '../MovieCard/MovieCard';

import { MOVIE_BASE_URL} from '../../utils/constants';

import './MoviesCardList.css';

const MoviesCardList = ({ cards }) => {
  return (
    <ul className="movies-card-list">
      {cards.map((card) => (
        <li key={card.id}>
          <MovieCard
            name={card.nameRU}
            coverUrl={`${MOVIE_BASE_URL}${card.image.url}`}
            duration={card.duration}
          />
        </li>
      ))}
    </ul>
  );
};

export default MoviesCardList;
