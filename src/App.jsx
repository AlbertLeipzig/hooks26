import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import usersData from '../usersData.json';

export const App = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
