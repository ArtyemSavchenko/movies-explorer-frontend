import { useState } from 'react';

import { CurrentUser } from '../../contexts/CurrentUserContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [likedCards, setLikedCards] = useState([]);

  const signIn = (user, callback) => {
    setUser(user);

    if (callback) {
      setTimeout(callback, 0);
    }
  };

  const signOut = (callback) => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('last-result');
    setUser(null);

    if (callback) {
      callback();
    }
  };

  const providerValue = { user, signIn, signOut, likedCards, setLikedCards };

  return (
    <CurrentUser.Provider value={providerValue}>
      {children}
    </CurrentUser.Provider>
  );
};
export default AuthProvider;
