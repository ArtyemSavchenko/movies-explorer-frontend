import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
// import Landing from '../pages/Landing/Landing';
// import Registration from '../pages/Registration/Registration';
// import NotFound from '../pages/NotFound/NotFound';

const Landing = React.lazy(() => import('../pages/Landing/Landing'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'));
const Registration = React.lazy(() => import('../pages/Registration/Registration'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'registration',
        element: <Registration/>,
      },
    ],
  },
]);
