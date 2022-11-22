import { useContext, useEffect, useState } from 'react';

import Preloader from '../../ui/Preloader/Preloader';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../SearchMovieForm/SearchMovieForm';
import Empty from '../../Empty/Empty';

import { filterMovies } from '../../../utils/searchUtils';
import { usePushNotification } from '../../shared/Notifications/Notifications';
import { MOVIE_COVER_URL } from '../../../utils/constants';

import { getMovies } from '../../../utils/MoviesApi';
import { dislikeMovie, likeMovie } from '../../../utils/MainApi';

import { CurrentUser } from '../../../contexts/CurrentUserContext';

import './Movies.css';

const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const [isMoreResultBtnVisible, setIsMoreResultBtnVisible] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  const { likedCards, setLikedCards, user } = useContext(CurrentUser);

  const pushNotification = usePushNotification();

  const renderCards = (newCards) => {
    if (newCards.length === 0) {
      setIsEmptySearch(true);
      setCards([]);
    } else {
      setIsEmptySearch(false);
      setCards(injectLikes(newCards));
    }
  };

  const likeCard = async (card) => {
    try {
      const movie = await likeMovie(card);
      setLikedCards([movie, ...likedCards]);

      setCards(
        cards.map((card) => {
          if (movie.movieId === card.movieId) {
            card.owner = user._id;
            card._id = movie._id;
          }
          return card;
        })
      );
    } catch (err) {
      pushNotification({
        type: 'error',
        text: err.message,
      });
    }
  };

  const dislikeCard = async (card) => {
    try {
      await dislikeMovie(card._id);

      setLikedCards(
        likedCards.filter((likedCard) => likedCard._id !== card._id)
      );

      setCards(
        cards.map((oldCard) => {
          if (oldCard._id === card._id) {
            delete oldCard.owner;
          }
          return oldCard;
        })
      );
    } catch (err) {
      pushNotification({
        type: 'error',
        text: err.message,
      });
    }
  };

  const handleLikeOrDislikeCard = async (card) => {
    if (card.owner !== user._id) {
      likeCard(card);
    } else {
      dislikeCard(card);
    }
  };

  const handleSearch = async () => {
    setIsEmptySearch(false);
    setIsLoading(true);

    try {
      const movies = await getMovies();
      const formattedMovies = movies.map((movie) => {
        return {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `${MOVIE_COVER_URL}${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `${MOVIE_COVER_URL}${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        };
      });

      const filteredMovies = filterMovies(formattedMovies, {
        string: movieName,
        isShortMovies: isShortMovies,
      });

      renderCards(filteredMovies);

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

    renderCards(filteredMovies);
  }, []);

  const injectLikes = (cards) => {
    return cards.map(
      (card) =>
        likedCards.find((likedMovie) => card.movieId === likedMovie.movieId) || card
    );
  };

  return (
    <section className="movies">
      <SearchMovieForm
        extraClass="movies__search-form"
        onSubmit={handleSearch}
        movieName={movieName}
        setMovieName={setMovieName}
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={cards} cbBtnClick={handleLikeOrDislikeCard} />
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
