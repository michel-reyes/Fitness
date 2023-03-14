import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { ErrorPage } from '@/routes/ErrorPage';
import { Dashboard, Beginner, Workout } from '@/routes/xero/';
import { Summary } from '@/routes/xero/beginner';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/xero',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/xero/beginner/',
    element: <Beginner />,
    children: [
      { index: true, element: <Summary /> },
      {
        path: '/xero/beginner/:day',
        element: <Workout />,
      },
    ],
  },
  {
    path: '/xero/advanced',
    element: <p>Xero2 for advanced</p>,
  },
  {
    path: '/hitt',
    element: <p>HIIT</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
