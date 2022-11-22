import { useState } from 'react';

import ModernCheckbox from '../ui/ModernCheckbox/ModernCheckbox';

import './SearchMovieForm.css';

const SearchMovieForm = ({
  extraClass = '',
  onSubmit,
  isShortMovies,
  setIsShortMovies,
  movieName,
  setMovieName,
  ...restProps
}) => {
  const [searchErr, setSearchErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movieName) {
      setSearchErr('Нужно ввести ключевое слово');
      return;
    }

    onSubmit();
  };

  const inputMovieName = (e) => {
    setSearchErr('');
    setMovieName(e.target.value);
  };

  return (
    <form
      className={`search-movie-form ${extraClass}`}
      onSubmit={handleSubmit}
      noValidate
      {...restProps}
    >
      <div className="search-movie-form__search-box">
        <input
          className="search-movie-form__input"
          value={movieName}
          onChange={inputMovieName}
          type="text"
          placeholder="Фильм"
          name="name"
          required
        />
        <button
          className="search-movie-form__submit-btn"
          type="submit"
          aria-label="Найти фильм."
        />
      </div>
      <p className="search-movie-form__err">{searchErr}</p>

      <ModernCheckbox
        extraClass="search-movie-form__short-movies"
        label="Короткометражки"
        checked={isShortMovies}
        setChecked={setIsShortMovies}
      />
    </form>
  );
};

export default SearchMovieForm;
