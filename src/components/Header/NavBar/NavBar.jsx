import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import BurgerButton from '../BurgerButton/BurgerButton';
import BtnClose from '../../BtnClose/BtnClose';

import './NavBar.css';

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const setLinkClass = ({ isActive }) => {
    let className = 'nav-bar__link focus-effect';
    if (isActive) {
      className += ' nav-bar__link_active';
    }
    return className;
  };

  const setBtnClass = ({ isActive }) =>
    isActive ? 'nav-bar__btn nav-bar__btn_active' : 'nav-bar__btn';

  return (
    <div className="nav-bar">
      <BurgerButton extraClass="nav-bar__burger-btn" aria-label="Открыть меню" onClick={() => setIsOpened(true)} />
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
            <NavLink className={setLinkClass} to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className={setLinkClass} to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className={setLinkClass} to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className={setBtnClass} to="/profile">
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};
export default NavBar;
