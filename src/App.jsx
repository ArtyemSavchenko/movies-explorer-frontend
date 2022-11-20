import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Preloader from './components/ui/Preloader/Preloader';

import { CurrentUser } from './contexts/CurrentUserContext';
import { getUser } from './utils/MainApi';

import './App.css';

const App = () => {
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const { signIn } = useContext(CurrentUser);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('jwt');
      if (!token) {
        setIsCheckingToken(false);
        return;
      }

      try {
        const user = await getUser();
        if (user) {
          signIn(user);
        }
      } finally {
        setIsCheckingToken(false);
      }
    };

    checkToken();
  }, []);

  return isCheckingToken ? (
    <Preloader />
  ) : (
    <div className="app">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
