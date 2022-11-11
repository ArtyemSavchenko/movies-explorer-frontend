import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
