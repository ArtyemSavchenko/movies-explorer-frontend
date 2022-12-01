import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Preloader from './components/ui/Preloader/Preloader';
import { usePushNotification } from './components/shared/Notifications/Notifications';

import { CurrentUser } from './contexts/CurrentUserContext';
import { getLikedMovies, getUser } from './utils/MainApi';

import './App.css';

const App = () => {
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const pushNotification = usePushNotification();

  const [user, setUser] = useState(null);
  const [likedCards, setLikedCards] = useState([]);

  const signIn = async (user, callback) => {
    setUser(user);

    if (callback) {
      callback();
    }
  };

  const signOut = (callback) => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('last-result');
    setUser(null);
    setLikedCards([]);

    if (callback) {
      callback();
    }
  };

  const providerValue = { user, signIn, signOut, likedCards, setLikedCards };

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('jwt');
      if (!token) {
        localStorage.removeItem('last-result');
        setIsCheckingToken(false);
        return;
      }

      try {
        const user = await getUser();
        signIn(user);
      } catch (err) {
        pushNotification({
          type: 'error',
          heading: 'Не удалось авторизоваться',
          text: 'Токен недействителен',
        });

        localStorage.removeItem('last-result');
        localStorage.removeItem('jwt');

        setIsCheckingToken(false);
        return;
      }

      try {
        const likedMovies = await getLikedMovies();
        setLikedCards(likedMovies);
      } catch (err) {
        pushNotification({
          type: 'error',
          text: err.message,
        });
      } finally {
        setIsCheckingToken(false);
      }
    };

    checkToken();
  }, []);

  return isCheckingToken ? (
    <Preloader />
  ) : (
    <Suspense fallback={<Preloader />}>
      <CurrentUser.Provider value={providerValue}>
        <div className="app">
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </div>
      </CurrentUser.Provider>
    </Suspense>
  );
};

export default App;
