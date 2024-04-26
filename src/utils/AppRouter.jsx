import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App.jsx';
import { AllUsersPage } from '../pages/AllUsersPage.jsx';
import { SingleUserPage } from '../pages/SingleUserPage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/users',
        element: <AllUsersPage />,
      },
      {
        path: '/user/:id',
        element: <SingleUserPage />,
      },
    ],
  },
]);
