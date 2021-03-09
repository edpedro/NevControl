import { useEffect, useState } from 'react';

import api from '../../services/api';

function TransactionContext() {
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState();

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

  return { balance, transactions };
}

export default TransactionContext;
