import { useEffect, useState } from 'react';

import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Preloader from '../../components/ui/Preloader/Preloader';
import SearchMovieForm from '../Movies/SearchMovieForm/SearchMovieForm';

import { MOVIE_BASE_URL } from '../../utils/constants';

import './SavedMovies.css';

const SavedMovies = () => {
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
    <section className="saved-movies">
      <SearchMovieForm extraClass="saved-movies__search-form" />
      {isLoading ? <Preloader /> : <MoviesCardList cards={cards} />}
    </section>
  );
};
export default SavedMovies;
