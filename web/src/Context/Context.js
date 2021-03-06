import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function Provider({ children }) {
  const { handleLogin, handleRegister, user, autheticated } = useAuth();

  return (
    <Context.Provider
      value={{ handleLogin, handleRegister, user, autheticated }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
