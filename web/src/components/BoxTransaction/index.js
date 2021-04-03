import React, { useContext, useState, useEffect } from 'react';

import { Context } from '../../Context/Context';

import FilterTransaction from '../FilterTransaction';

import { Container } from './styles';

function BoxTransaction({ title, validation }) {
  const { transactions } = useContext(Context);

  const [datas, setDatas] = useState({});

  useEffect(() => {
    function filterTransactions() {
      const result = Object.values(transactions).filter(
        (transaction) => transaction.operation === validation
      );
      setDatas(result);
    }
    filterTransactions();
  }, [validation, transactions]);

  return (
    <>
      <Container>
        <FilterTransaction datas={datas} title={title} />
      </Container>
    </>
  );
}

export default BoxTransaction;
