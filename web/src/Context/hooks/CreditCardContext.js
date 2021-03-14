import { useEffect, useState } from 'react';

import api from '../../services/api';

function CreditCardContext() {
  const [creditCards, setCreditCards] = useState();
  const [update, setUpdate] = useState(false);

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
  }, [update]);

  const stateUpdate = (state) => {
    setUpdate(state);
  };

  return {
    creditCards,
    stateUpdate,
  };
}

export default CreditCardContext;
