import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = ({ isLoggedIn }) => {
  const location = useLocation('/');

  const [isLanding, setIsLanding] = useState(true);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLanding(true);
    } else {
      setIsLanding(false);
    }
  }, [location.pathname]);

  const setLogoClass = ({ isActive }) =>
    isActive ? 'header__logo header__logo_current-page' : 'header__logo';

  return (
    <header className={`header${isLanding ? ' header_landing' : ''}`}>
      <NavLink className={setLogoClass} to="/">
        <Logo extraClass="header__logo-pic" />
      </NavLink>

      <NavBar />
    </header>
  );
};
export default Header;
