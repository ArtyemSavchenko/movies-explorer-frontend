import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SignMenu from './SignMenu/SignMenu';
import NavBar from './NavBar/NavBar';

import './Header.css';
import LogoLink from '../LogoLink/LogoLink';

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

  return (
    <header className={`header${isLanding ? ' header_landing' : ''}`}>
      <LogoLink funny />
      {isLoggedIn ? <NavBar /> : <SignMenu />}
    </header>
  );
};

export default Header;
