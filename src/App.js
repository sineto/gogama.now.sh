import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ContextProvider } from './context/DataContext';
import Routes from './Routes'


function App () {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
