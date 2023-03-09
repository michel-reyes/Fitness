import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Page } from 'konsta/react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { ErrorPage } from '@/routes/ErrorPage';
import { Dashboard, Beginner } from '@/routes/xero';

const router = createBrowserRouter([
  {
    path: '/fitness/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fitness/xero',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fitness/xero/beginner',
    element: <Beginner />,
  },
  {
    path: '/fitness/xero/intermediate',
    element: <p>Xero2 for intermediate</p>,
  },
  {
    path: '/fitness/xero/advanced',
    element: <p>Xero2 for advanced</p>,
  },
  {
    path: '/fitness/hitt',
    element: <p>HIIT</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App theme="material">
      <Page>
        <RouterProvider
          basename="https://michel-reyes.github.io/fitness/"
          router={router}
        />
      </Page>
    </App>
  </React.StrictMode>,
);
