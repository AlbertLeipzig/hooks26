import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/main.scss';
import { AllUsersPage } from './pages/AllUsersPage.jsx';
import { SingleUserPage } from './pages/SingleUserPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllUsersPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/user',
        element: <SingleUserPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
