import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { ErrorPage } from '@/routes/ErrorPage';
import { Child } from '@/routes/Child';
import { XeroDashboard } from '@/routes/xero';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/xero',
    element: <XeroDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <p>Some placeholder child here</p> },
          {
            path: '/xero/:id',
            element: <p>Xero2</p>,
          },
        ],
      },
    ],
  },
  {
    path: '/hitt',
    element: <p>HIIT</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
