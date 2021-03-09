import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';
import FormatDate from '../../utils/FormatDate';

import { Container, Header, Grid, GrindItem } from './styles';

function BoxTransaction({ title }) {
  const { transactions } = useContext(Context);

  return (
    <Container>
      <Header>
        <h2>{transactions && transactions.length > 0 && title}</h2>
      </Header>
      <Grid>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction, key) => (
            <GrindItem
              className={transaction.type === 'despesa' ? 'active' : ''}
              key={key}
            >
              <li>
                <p>{FormatDate(transaction.data)}</p>
              </li>
              <li>{FormatUppercase(transaction.description)}</li>
              <li>
                <p>{transaction.category}</p>
              </li>
              <li>
                R$
                <span>
                  {' '}
                  {transaction.type === 'despesa'
                    ? '-' + FormatCurrency(transaction.value)
                    : FormatCurrency(transaction.value)}
                </span>
              </li>
            </GrindItem>
          ))
        ) : (
          <h1>Sem lançamentos</h1>
        )}
      </Grid>
    </Container>
  );
}

export default BoxTransaction;
