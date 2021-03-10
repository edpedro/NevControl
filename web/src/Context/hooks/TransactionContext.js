import { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

function TransactionContext() {
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState();
  const [createTransaction, setCreateTransaction] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function getTransaction() {
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
  }, []);

  const handleCreateTransaction = useCallback(async (useData) => {
    console.log(useData);
    const token = localStorage.getItem('token');
    try {
      const data = await api.post('/transacao', useData, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setCreateTransaction(true);
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  return { balance, transactions, handleCreateTransaction };
}

export default TransactionContext;
