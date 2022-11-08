import { RouterProvider } from 'react-router-dom';

import './App.css';

import Main from './components/Main/Main';

import { router } from './routes/routes';

const App = () => {
  return (
    <div className="app">
      <Main>
        <RouterProvider router={router} />
      </Main>
    </div>
  );
}

export default App;
