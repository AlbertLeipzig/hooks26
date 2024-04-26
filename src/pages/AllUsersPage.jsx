import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../utils/AppContext';

export const AllUsersPage = () => {
  const { users } = useContext(AppContext);

  if (!users) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="all-users-page">
      <h1>All Users Page</h1>
      <ul>
        {users.map((user, id) => (
          <li key={id}>
            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
