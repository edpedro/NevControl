import { useEffect, useState } from 'react';

import api from '../../services/api';

function TransactionContext() {
  const [balance, setBalance] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function getTransaction() {
      const {
        data: { balance },
      } = await api.get('/transacao', {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      console.log(balance);
      setBalance(balance);
    }
    getTransaction();
  }, []);

  return { balance };
}

export default TransactionContext;
