import { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

function TransactionContext() {
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState({});
  const [createTransaction, setCreateTransaction] = useState();
  const [updateTransaction, setUpdateTransaction] = useState({});
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function getTransaction() {
      const token = localStorage.getItem('token');
      const {
        data: { balance, data },
      } = await api.get('/transacao', {
        headers: {
          Authorization: JSON.parse(token),
        },
      });

      setTransactions(data);
      setBalance(balance);
      setUpdate(false);
    }
    getTransaction();
  }, [createTransaction, update]);

  const stateUpdateTransaction = (state) => {
    setUpdate(state);
  };

  const handleCreateTransaction = useCallback(async (useData, id) => {
    const token = localStorage.getItem('token');

    const url = id ? `/transacao/${id}` : '/transacao';
    const method = id ? api.put : api.post;

    try {
      const data = await method(url, useData, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setCreateTransaction(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  const handleRemoveTransaction = useCallback(async (id) => {
    const token = localStorage.getItem('token');
    try {
      await api.delete(`/transacao/${id}`, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setCreateTransaction(id);
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  const handleShowTransaction = useCallback(async (id) => {
    const token = localStorage.getItem('token');
    try {
      const { data } = await api.get(`/transacao/${id}`, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setUpdateTransaction(data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return {
    balance,
    transactions,
    handleCreateTransaction,
    handleRemoveTransaction,
    handleShowTransaction,
    updateTransaction,
    stateUpdateTransaction,
  };
}

export default TransactionContext;
