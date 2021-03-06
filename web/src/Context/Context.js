import React, { createContext } from 'react';

const Context = createContext();

function Provider({ children }) {
  return <Context.Provider value={() => {}}>{children}</Context.Provider>;
}

export { Context, Provider };
