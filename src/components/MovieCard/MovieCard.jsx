import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import LikeBtn from '../ui/LikeBtn/LikeBtn';

import { MOVIE_COVER_URL } from '../../utils/constants';

import { CurrentUser } from '../../contexts/CurrentUserContext';

import './MovieCard.css';

const MovieCard = ({ extraClass = '', card, cbBtnClick }) => {
  const location = useLocation();
  const { user } = useContext(CurrentUser);

  const convertDuration = (durationNumber) => {
    const lastTwoDigits = durationNumber % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return (durationNumber += ' минут');
    } else {
      const lastDigit = durationNumber % 10;

      if (lastDigit === 1) {
        return (durationNumber += ' минута');
      }
      if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
        return (durationNumber += ' минуты');
      }
      return (durationNumber += ' минут');
    }
  };

  const handleLikeClick = () => {
    cbBtnClick(card);
  };

  return (
    <article className={`movie-card ${extraClass}`}>
      <h2 className="movie-card__name">{card.nameRU}</h2>
      <p className="movie-card__duration">{convertDuration(card.duration)}</p>
      <a
        className="movie-card__trailer-link"
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Ссылка на трейлер."
      >
        <img
          className="movie-card__cover"
          src={typeof card.image === 'string' ? card.image : `${MOVIE_COVER_URL}${card.image.url}`}
          alt="Постер фильма."
        />
      </a>

      {location.pathname === '/movies' ? (
        <LikeBtn
          extraClass="movie-card__btn"
          type="button"
          isLiked={card.owner === user._id}
          onClick={handleLikeClick}
        >
          Сохранить
        </LikeBtn>
      ) : (
        <button
          className="movie-card__del-btn"
          type="button"
          aria-label="Удалить фильм из сохраненных."
          onClick={handleLikeClick}
        />
      )}
    </article>
  );
};

export default MovieCard;
