import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';
import TransactionContext from './hooks/TransactionContext';
import CreditCardContext from './hooks/CreditCardContext';

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
    handleRemoveTransaction,
    handleShowTransaction,
    updateTransaction,
  } = TransactionContext();

  const {
    creditCards,
    stateUpdate,
    handleCreateCreditCard,
    handleShowCreditCard,
    updateCreditCard,
  } = CreditCardContext();

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
        handleRemoveTransaction,
        handleShowTransaction,
        updateTransaction,
        creditCards,
        stateUpdate,
        handleCreateCreditCard,
        handleShowCreditCard,
        updateCreditCard,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
