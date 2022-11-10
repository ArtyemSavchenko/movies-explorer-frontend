import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Landing from '../pages/Landing/Landing';
import NotFound from '../pages/NotFound/NotFound';
import Registration from '../pages/Registration/Registration';

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
        path: 'registration',
        element: <Registration />,
      },
    ],
  },
]);
