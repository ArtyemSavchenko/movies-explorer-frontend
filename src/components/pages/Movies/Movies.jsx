import { useEffect, useState } from 'react';


import Preloader from '../../ui/Preloader/Preloader';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../SearchMovieForm/SearchMovieForm';
import Empty from '../../Empty/Empty';

import { usePushNotification } from '../../shared/Notifications/Notifications';

import { MOVIE_API_URL } from '../../../utils/constants';

import './Movies.css';

const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const pushNotification = usePushNotification();

  //TODO удалить тестовую функцию - берет несколько тестовых карточек и проставляет рандомно лайки
  //TODO тестовая функция компонента выброса ошибок
  useEffect(() => {
    setIsEmptySearch(false);
    setIsLoading(true);
    fetch(MOVIE_API_URL)
      .then((res) => {
        if (!res.ok) {
          const status = res.status;
          return res.json().then((err) => {
            err.status = status;
            return Promise.reject(err);
          });
        }
        return res.json();
      })
      .then((data) => {
        data.length = 12;
        if (data.length === 0) {
          setIsEmptySearch(true);
        }
        const newCards = data.map((card) => {
          if (Math.random() > 0.5) {
            card.isLiked = true;
          } else {
            card.isLiked = false;
          }
          return card;
        });
        setCards(newCards);
      })
      .catch((err) => {
        pushNotification({
          type: 'error',
          heading: err.status,
          text: err.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //TODO удалить тестовую функцию - лайкает карточки
  const handleLikeCard = (id) => {
    setCards((cards) => {
      return cards.map((card) => {
        if (card.id === id) {
          card.isLiked = !card.isLiked;
        }
        return card;
      });
    });
  };

  //TODO удалить демо функцию
  const handleSubmit = (e) => {
    pushNotification({
      type: 'success',
      heading: 'Поиск',
      text: `Ищем`,
    });
  };

  return (
    <section className="movies">
      <SearchMovieForm
        extraClass="movies__search-form"
        onSubmit={handleSubmit}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={cards} cbBtnClick={handleLikeCard} />
      )}
      {isEmptySearch && !isLoading ? (
        <Empty heading="╮（╯＿╰）╭" text="Ничего не нашлось" />
      ) : null}
      <button className="movies__more-btn" type="button">
        Ещё
      </button>
    </section>
  );
};

export default Movies;
