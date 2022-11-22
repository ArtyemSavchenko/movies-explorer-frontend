import { useContext, useEffect, useState } from 'react';

import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../SearchMovieForm/SearchMovieForm';
import Empty from '../../Empty/Empty';

import { usePushNotification } from '../../../components/shared/Notifications/Notifications';
import { CurrentUser } from '../../../contexts/CurrentUserContext';

import { filterMovies } from '../../../utils/searchUtils';
import { dislikeMovie } from '../../../utils/MainApi';

import './SavedMovies.css';

const SavedMovies = () => {
  const { likedCards, setLikedCards } = useContext(CurrentUser);

  const [cards, setCards] = useState(likedCards);
  const [movieName, setMovieName] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  const pushNotification = usePushNotification();

  const handleSearch = () => {
    setCards(filterMovies(likedCards, { string: movieName, isShortMovies }));
  };

  const handleDeleteCard = async (card) => {
    try {
      await dislikeMovie(card._id);
      setLikedCards(
        likedCards.filter((likedCard) => likedCard._id !== card._id)
      );
    } catch (err) {
      pushNotification({
        type: 'error',
        text: err.message,
      });
    }
  };

  useEffect(() => {
    handleSearch();
  }, [likedCards]);

  return (
    <section className="saved-movies">
      <SearchMovieForm
        extraClass="saved-movies__search-form"
        onSubmit={handleSearch}
        movieName={movieName}
        setMovieName={setMovieName}
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />

      {likedCards.length === 0 ? (
        <Empty heading="(┬┬﹏┬┬)" text="Вы не добавили ни одного фильма" />
      ) : cards.length === 0 ? (
        <Empty heading="(┬┬﹏┬┬)" text="Ничего не найдено" />
      ) : (
        <MoviesCardList cards={cards} cbBtnClick={handleDeleteCard} />
      )}
    </section>
  );
};
export default SavedMovies;
