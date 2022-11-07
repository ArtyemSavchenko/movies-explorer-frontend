import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css';

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
