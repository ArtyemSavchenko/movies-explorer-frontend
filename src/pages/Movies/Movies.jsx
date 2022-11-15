import { useEffect, useState } from 'react';

import Preloader from '../../components/ui/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchMovieForm from '../../components/SearchMovieForm/SearchMovieForm';

import { MOVIE_BASE_URL } from '../../utils/constants';

import './Movies.css';

const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  //TODO удалить тестовую функцию - берет несколько тестовых карточек и проставляет рандомно лайки
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
        const newCards = data.map((card) => {
          if(Math.random() > 0.5) {
            card.isLiked = true;
          } else {
            card.isLiked = false;
          }
          return card;
        })
        setCards(newCards);
      })
      .catch((err) => {
        console.log('catch: ', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //TODO удалить тестовую функцию - лайкает карточки
  const handleLikeCard = (id) => {
    setCards((cards) => {
      return cards.map((card) => {
        if(card.id === id) {
          card.isLiked = !card.isLiked;
        }
        return card;
      })
    });
  };

  return (
    <section className="movies">
      <SearchMovieForm extraClass="movies__search-form" />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={cards} cbBtnClick={handleLikeCard} />
      )}
    </section>
  );
};

export default Movies;
