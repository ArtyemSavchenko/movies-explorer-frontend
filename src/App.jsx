import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { CurrentUserInfo } from './contexts/CurrentUserContext';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  })


  return (
    <CurrentUserInfo.Provider value={currentUser}>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </CurrentUserInfo.Provider>
  );
};

export default App;
