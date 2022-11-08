import { RouterProvider } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';

import Main from './components/Main/Main';

import { router } from './routes/routes';

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
