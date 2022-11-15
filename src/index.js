import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';

import Preloader from './components/ui/Preloader/Preloader';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  // </StrictMode>
);
