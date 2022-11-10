import { RouterProvider } from 'react-router-dom';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { router } from './routes/routes';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
