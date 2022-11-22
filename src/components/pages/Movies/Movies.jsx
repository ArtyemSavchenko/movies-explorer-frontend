import { useEffect, useState } from 'react';

import Preloader from '../../ui/Preloader/Preloader';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../SearchMovieForm/SearchMovieForm';
import Empty from '../../Empty/Empty';

import { getMovies } from '../../../utils/MoviesApi';
import { filterMovies } from '../../../utils/searchUtils';
import { usePushNotification } from '../../shared/Notifications/Notifications';

import './Movies.css';

const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const [isMoreResultBtnVisible, setIsMoreResultBtnVisible] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  const pushNotification = usePushNotification();

  //TODO удалить тестовую функцию - лайкает карточки
  const handleLikeCard = (id) => {};

  //TODO удалить демо функцию
  const handleSubmit = async (e) => {
    setIsEmptySearch(false);
    setIsLoading(true);

    try {
      const movies = await getMovies();

      const filteredMovies = filterMovies(movies, {
        string: movieName,
        isShortMovies: isShortMovies,
      });
      setCards(filteredMovies);

      if (filteredMovies.length === 0) {
        setIsEmptySearch(true);
      }

      localStorage.setItem(
        'last-result',
        JSON.stringify({
          movieName,
          isShortMovies,
          filteredMovies,
        })
      );
    } catch (err) {
      pushNotification({
        type: 'error',
        text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    const lastResultString = localStorage.getItem('last-result');
    if (!lastResultString) {
      return;
    }

    const { movieName, isShortMovies, filteredMovies } =
      JSON.parse(lastResultString);

    setMovieName(movieName);
    setIsShortMovies(isShortMovies);
    setCards(filteredMovies);

    if (filteredMovies.length === 0) {
      setIsEmptySearch(true);
    } else {
      setIsEmptySearch(false);
    }
  }, []);

  return (
    <section className="movies">
      <SearchMovieForm
        extraClass="movies__search-form"
        onSubmit={handleSubmit}
        movieName={movieName}
        setMovieName={setMovieName}
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={cards} cbBtnClick={handleLikeCard} />
      )}
      {isEmptySearch && !isLoading ? (
        <Empty heading="╮（╯＿╰）╭" text="Ничего не нашлось" />
      ) : null}
      <button
        className={`movies__more-btn${
          isMoreResultBtnVisible ? ' movies__more-btn_visible' : ''
        }`}
        type="button"
      >
        Ещё
      </button>
    </section>
  );
};

export default Movies;
