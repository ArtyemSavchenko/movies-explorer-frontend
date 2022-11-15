import { useLocation } from 'react-router-dom';

import LikeBtn from '../ui/LikeBtn/LikeBtn';

import './MovieCard.css';

const MovieCard = ({
  extraClass = '',
  name,
  coverUrl,
  duration,
  isLiked,
  cbBtnClick,
}) => {
  const location = useLocation();

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

  return (
    <article className={`movie-card ${extraClass}`}>
      <h2 className="movie-card__name">{name}</h2>
      <p className="movie-card__duration">{convertDuration(duration)}</p>
      <img className="movie-card__cover" src={coverUrl} alt="Постер фильма." />

      {location.pathname === '/movies' ? (
        <LikeBtn
          extraClass="movie-card__btn"
          isLiked={isLiked}
          onClick={cbBtnClick}
        >
          Сохранить
        </LikeBtn>
      ) : (
        <button
          className="movie-card__del-btn"
          aria-label="Удалить фильм из сохраненных."
          onClick={cbBtnClick}
        />
      )}

    </article>
  );
};

export default MovieCard;
