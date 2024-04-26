import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './utils/AppContext';
import './style/main.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
