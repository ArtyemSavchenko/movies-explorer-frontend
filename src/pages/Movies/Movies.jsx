import { useEffect, useState } from 'react';

import SearchMovieForm from './SearchMovieForm/SearchMovieForm';
import Preloader from '../../components/ui/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

import { MOVIE_BASE_URL } from '../../utils/constants';

import './Movies.css';

const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        setCards(data);
      })
      .catch((err) => {
        console.log('catch: ', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="movies">
      <SearchMovieForm extraClass="movies__search-form" />
      {isLoading ? <Preloader /> : <MoviesCardList cards={cards} />}
    </section>
  );
};

export default Movies;
