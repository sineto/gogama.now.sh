import React, { createContext, useState } from 'react';
import data from '../teammates.json';

const DataContext = createContext();

const sortCb = (nameA, nameB) => {
  const a = nameA.firstname.toLowerCase();
  const b = nameB.firstname.toLowerCase();
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  return 0;
};

export const ContextProvider = ({ children }) => {
  const peopleSorted = data.sort(sortCb);
  const [people, setPeople] = useState(peopleSorted);
  const [person, setPerson] = useState({});

  return (
    <DataContext.Provider value={{ people, person, setPeople, setPerson }}>
      { children }
    </DataContext.Provider>
  );
};

export default DataContext;
