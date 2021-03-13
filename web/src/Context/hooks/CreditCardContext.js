import { useEffect, useState } from 'react';

import api from '../../services/api';

function CreditCardContext() {
  const [creditCards, setCreditCards] = useState();

  useEffect(() => {
    async function getCreditCard() {
      const token = localStorage.getItem('token');
      const {
        data: { creditCard },
      } = await api.get('/creditcard', {
        headers: {
          Authorization: JSON.parse(token),
        },
      });

      setCreditCards(creditCard);
    }
    getCreditCard();
  }, []);

  return {
    creditCards,
  };
}

export default CreditCardContext;
