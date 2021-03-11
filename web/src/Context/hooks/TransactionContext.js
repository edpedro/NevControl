import { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

function TransactionContext() {
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState();
  const [createTransaction, setCreateTransaction] = useState();

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
    }
    getTransaction();
  }, [createTransaction]);

  const handleCreateTransaction = useCallback(async (useData) => {
    const token = localStorage.getItem('token');
    try {
      const data = await api.post('/transacao', useData, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setCreateTransaction(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  return { balance, transactions, handleCreateTransaction };
}

export default TransactionContext;
