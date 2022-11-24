import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Preloader from './components/ui/Preloader/Preloader';
import Notifications from './components/shared/Notifications/Notifications';

import { CurrentUser } from './contexts/CurrentUserContext';
import { getLikedMovies, getUser } from './utils/MainApi';

import './App.css';

const App = () => {
  const [isCheckingToken, setIsCheckingToken] = useState(true);

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
        setIsCheckingToken(false);
        return;
      }

      try {
        const user = await getUser();
        signIn(user);

        const likedMovies = await getLikedMovies();
        setLikedCards(likedMovies);
      } catch(err) {
        console.error(err.message);
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
        <Notifications delayClose={5000}>
          <div className="app">
            <Header />
            <Main>
              <Outlet />
            </Main>
            <Footer />
          </div>
        </Notifications>
      </CurrentUser.Provider>
    </Suspense>
  );
};

export default App;
