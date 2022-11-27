import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';

import Notifications from './components/shared/Notifications/Notifications';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Notifications delayClose={5000}>
      <RouterProvider router={router} />
    </Notifications>
);
