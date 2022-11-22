import { useEffect, useState } from 'react';

import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../SearchMovieForm/SearchMovieForm';
import Preloader from '../../ui/Preloader/Preloader';
import Empty from '../../Empty/Empty';

import './SavedMovies.css';

import { getMovies } from '../../../utils/MoviesApi';
import { usePushNotification } from '../../../components/shared/Notifications/Notifications';

const SavedMovies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShortMovies, setIsShortMovies] = useState(false);

  const pushNotification = usePushNotification();

  const handleDeleteCard = (id) => {

  };

  return (
    <section className="saved-movies">
      <SearchMovieForm
        extraClass="saved-movies__search-form"
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={cards} cbBtnClick={handleDeleteCard} />
      )}
      {cards.length === 0 && !isLoading ? (
        <Empty heading="(┬┬﹏┬┬)" text="Здесь пока что пусто" />
      ) : null}
    </section>
  );
};
export default SavedMovies;
