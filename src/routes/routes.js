import { createBrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import Promo from '../pages/Landing/Promo/Promo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/test',
    element: <Promo />,
  },
]);
