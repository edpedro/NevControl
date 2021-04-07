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
    handleLogout,
  } = useAuth();
  const {
    balance,
    transactions,
    handleCreateTransaction,
    handleRemoveTransaction,
    handleShowTransaction,
    updateTransaction,
    stateUpdateTransaction,
    handleMonthCurrent,
  } = TransactionContext();

  const {
    creditCards,
    stateUpdateCreditCard,
    handleCreateCreditCard,
    handleShowCreditCard,
    updateCreditCard,
    handleRemoveCreditCard,
  } = CreditCardContext();

  return (
    <Context.Provider
      value={{
        handleLogin,
        handleLogout,
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
        stateUpdateCreditCard,
        handleCreateCreditCard,
        handleShowCreditCard,
        updateCreditCard,
        handleRemoveCreditCard,
        stateUpdateTransaction,
        handleMonthCurrent,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
