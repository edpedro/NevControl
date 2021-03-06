import { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

function CreditCardContext() {
  const [creditCards, setCreditCards] = useState([]);
  const [createCreditCard, setCreateCreditCard] = useState({});
  const [updateCreditCard, setUpdateCreditCard] = useState({});
  const [invoceCreditCard, setInvoceCreditCard] = useState({});
  const [update, setUpdate] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    async function getCreditCard() {
      const {
        data: { creditCard },
      } = await api.get('/creditcard', {
        headers: {
          Authorization: JSON.parse(token),
        },
      });

      setCreditCards(creditCard);
      setUpdate(false);
    }
    getCreditCard();
  }, [update, createCreditCard, token]);

  const stateUpdateCreditCard = (state) => {
    setUpdate(state);
  };

  const handleCreateCreditCard = useCallback(async (useData, id) => {
    const token = localStorage.getItem('token');

    const url = id ? `/creditcard/${id}` : '/creditcard';
    const method = id ? api.put : api.post;

    try {
      const data = await method(url, useData, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setCreateCreditCard(data);
      const message = id
        ? 'Cartão de credito atualizada com sucesso'
        : 'Cartão de credito cadastrada com sucesso';

      toast.success(message);
    } catch (error) {
      toast.success(error.response.data);
    }
  }, []);

  const handleShowCreditCard = useCallback(async (id) => {
    const token = localStorage.getItem('token');
    try {
      const { data } = await api.get(`/creditcard/${id}`, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });

      setUpdateCreditCard(data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  const handleShowInvoceCreditCard = useCallback(async (id, month) => {
    const token = localStorage.getItem('token');
    const query = month ? `?month=${month}` : '';

    try {
      const { data } = await api.get(`/creditcard/invoce/${id}${query}`, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });

      setInvoceCreditCard(data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  const handleRemoveCreditCard = useCallback(async (id) => {
    const token = localStorage.getItem('token');
    try {
      await api.delete(`/creditcard/${id}`, {
        headers: {
          Authorization: JSON.parse(token),
        },
      });
      setCreateCreditCard(id);
      toast.success('Cartão de credito deletada com sucesso!');
    } catch (error) {
      toast.success(error.response);
    }
  }, []);

  return {
    creditCards,
    stateUpdateCreditCard,
    handleCreateCreditCard,
    handleShowCreditCard,
    updateCreditCard,
    handleRemoveCreditCard,
    handleShowInvoceCreditCard,
    invoceCreditCard,
  };
}

export default CreditCardContext;
