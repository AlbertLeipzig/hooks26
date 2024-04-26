import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../utils/AppContext';

export const SingleUserPage = () => {
  const { users } = useContext(AppContext);
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    setUser(users.find((user) => user.id === Number(id)));
  }, [users]);

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="single-user-page">
      <h1>{user.name}</h1>
    </div>
  );
};
