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

  const pushNotification = usePushNotification();

  const initMovies = async () => {
    setIsLoading(true);
    try {
      const movies = await getMovies();

      movies.length = 12;
      const cards = movies.filter(() => {
        if (Math.random() > 0.5) {
          return true;
        }
        return false;
      });

      setCards(cards);
    } catch (err) {
      pushNotification({
        type: 'error',
        heading: err.status,
        text: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  //TODO удалить тестовую функцию (рандомно лайкает карточки)
  useEffect(() => {
    initMovies();
    // throw new Response('hello');
  }, []);

  //TODO удалить тестовую функцию - удаляет тестовые лайки
  const handleDeleteCard = (id) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  return (
    <section className="saved-movies">
      <SearchMovieForm extraClass="saved-movies__search-form" />
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
