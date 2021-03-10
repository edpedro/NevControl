import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';
import TransactionContext from './hooks/TransactionContext';

const Context = createContext();

function Provider({ children }) {
  const {
    handleLogin,
    handleRegister,
    user,
    authenticated,
    loading,
  } = useAuth();
  const {
    balance,
    transactions,
    handleCreateTransaction,
  } = TransactionContext();

  return (
    <Context.Provider
      value={{
        handleLogin,
        handleRegister,
        user,
        authenticated,
        loading,
        balance,
        transactions,
        handleCreateTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
