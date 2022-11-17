import { useState } from 'react';

import ModernCheckbox from '../ui/ModernCheckbox/ModernCheckbox';

import './SearchMovieForm.css';

const SearchMovieForm = ({ extraClass = '', onSubmit, ...restProps }) => {
  const [isShortMovies, setIsShortMovies] = useState(false);

  return (
    <form
      className={`search-movie-form ${extraClass}`}
      onSubmit={onSubmit}
      {...restProps}
    >
      <div className="search-movie-form__search-box">
        <input
          className="search-movie-form__input"
          type="text"
          placeholder="Фильм"
          name="name"
        />
        <button
          className="search-movie-form__submit-btn"
          type="submit"
          aria-label="Найти фильм."
        />
      </div>

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
