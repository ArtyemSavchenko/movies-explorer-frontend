import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';

import { router } from './routes/routes';

import NotificationsProvider from './components/shared/Notifications/Notifications';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <NotificationsProvider delayClose={5000}>
      <RouterProvider router={router} />
    </NotificationsProvider>
  </StrictMode>
);
