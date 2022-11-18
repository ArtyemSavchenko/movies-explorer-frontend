import { useEffect, useState } from 'react';

import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../SearchMovieForm/SearchMovieForm';
import Preloader from '../../ui/Preloader/Preloader';
import Empty from '../../Empty/Empty';

import { MOVIE_BASE_URL } from '../../../utils/constants';

import './SavedMovies.css';

const SavedMovies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(cards.length);

  //TODO удалить тестовую функцию (рандомно лайкает карточки)
  useEffect(() => {
    setIsLoading(true);
    fetch(`${MOVIE_BASE_URL}/beatfilm-movies`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        }
        return res.json();
      })
      .then((data) => {
        data.length = 12;
        const newCards = data.filter((card) => {
          if (Math.random() > 0.5) {
            return true;
          }
          return false;
        });
        setCards(newCards);
      })
      .catch((err) => {
        console.log('catch: ', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
