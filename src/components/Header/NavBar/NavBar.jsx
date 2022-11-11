import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import BurgerButton from '../BurgerButton/BurgerButton';
import BtnClose from '../../BtnClose/BtnClose';

import './NavBar.css';

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(true);

  const setActiveLinkClass = ({ isActive }) => {
    let className = 'nav-bar__link focus-effect';
    if (isActive) {
      className += ' nav-bar__link_active';
    }
    return className;
  };

  const setActiveButtonClass = ({ isActive }) =>
    isActive ? 'nav-bar__btn nav-bar__btn_active' : 'nav-bar__btn';

  return (
    <div className="nav-bar">
      <BurgerButton aria-label="Открыть меню" onClick={() => setIsOpened(true)} />
      <div
        className={`nav-bar__menu${isOpened ? ' nav-bar__menu_opened' : ''}`}
      >
        <BtnClose
          type="button"
          onClick={() => setIsOpened(false)}
          aria-label="Закрыть меню"
          extraClass="nav-bar__btn-close"
        />
        <ul className="nav-bar__link-box">
          <li>
            <NavLink className={setActiveLinkClass} to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className={setActiveLinkClass} to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className={setActiveLinkClass} to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className={setActiveButtonClass} to="/profile">
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
