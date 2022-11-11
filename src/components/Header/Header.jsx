import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import SignMenu from './SignMenu/SignMenu';
import NavBar from './NavBar/NavBar';

import './Header.css';

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  const [isLanding, setIsLanding] = useState(true);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLanding(true);
    } else {
      setIsLanding(false);
    }
  }, [location]);

  const setLogoClass = ({ isActive }) =>
    isActive ? 'header__logo header__logo_current-page' : 'header__logo';

  return (
    <header className={`header${isLanding ? ' header_landing' : ''}`}>
      <NavLink className={setLogoClass} to="/" aria-label="Ссылка на главную страницу.">
        <Logo extraClass="header__logo-pic" />
      </NavLink>
      {isLoggedIn ? <NavBar /> : <SignMenu />}
    </header>
  );
};
export default Header;
