import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();

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

  return <AppContext.Provider value={{users}}>{children}</AppContext.Provider>;
};
