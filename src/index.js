import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';

import Preloader from './components/ui/Preloader/Preloader';
import Notifications from './components/shared/Notifications/Notifications';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <Suspense fallback={<Preloader />}>
    <Notifications delayClose={5000}>
      <RouterProvider router={router} />
    </Notifications>
  </Suspense>
  // </StrictMode>
);
