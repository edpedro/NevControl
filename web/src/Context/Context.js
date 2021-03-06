import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function Provider({ children }) {
  const { handleLogin } = useAuth();

  return (
    <Context.Provider value={{ handleLogin }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
