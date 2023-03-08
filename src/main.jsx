import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import { ErrorPage } from './routes/ErrorPage';
import { Child } from './routes/Child';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // we have links like /contacts/1
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <p>Some placeholder child here</p> },
          {
            path: 'contacts/:id',
            element: <Child />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
