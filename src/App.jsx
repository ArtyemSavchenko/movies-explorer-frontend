import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.css';
import { CurrentUser } from './contexts/CurrentUserContext';
import { usePushNotification } from './components/shared/Notifications/Notifications';
import { getUser } from './utils/MainApi';

const App = () => {
  const { signIn } = useContext(CurrentUser);

  const pushNotification = usePushNotification();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('jwt');
      if (!token) {
        signIn({});
        return;
      }

      try {
        const currentUser = await getUser();

        signIn(currentUser);
      } catch (err) {
        pushNotification({
          type: 'error',
          text: err.message,
        });
        return;
      }
    };

    checkToken();
  }, []);

  return (
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
