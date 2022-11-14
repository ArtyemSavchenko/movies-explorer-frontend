import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

const Landing = lazy(() => import('../pages/Landing/Landing'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const SavedMovies = lazy(() => import('../pages/SavedMovies/SavedMovies'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'saved-movies',
        element: <SavedMovies />,
      },
    ],
  },
  {
    path: 'signup',
    element: <Register />,
  },
  {
    path: 'signin',
    element: <Login />,
  },
]);
