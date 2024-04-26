import { useState, useEffect } from 'react';
import usersData from '../usersData.json';
function App() {
  const [users, setUsers] = useState(usersData);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      /* usersArray */

      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchData()
      .then((data) => setUsers(data))
      .catch((e) => console.error(e));
  }, []);

  /*   const defaultUser = 'New User'; */
  /* <button onClick={() => setUsers([...users, defaultUser])}>Add User</button> */

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user, id) => (
          <li key={id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
