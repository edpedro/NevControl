import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';
import FormatDate from '../../utils/FormatDate';

import { Container, Header, Grid, Table, Tbody } from './styles';

function BoxTransaction({ title }) {
  const { transactions } = useContext(Context);

  return (
    <Container>
      <Header>
        <h2>{transactions && transactions.length > 0 && title}</h2>
      </Header>
      <Grid>
        <Table>
          <Tbody>
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction, key) => (
                <tr className={transaction.type === 'despesa' ? 'active' : ''}>
                  <td>{FormatDate(transaction.data)}</td>
                  <td>{FormatUppercase(transaction.description)}</td>
                  <td>{transaction.category}</td>
                  <td>
                    R${' '}
                    {transaction.type === 'despesa'
                      ? '-' + FormatCurrency(transaction.value)
                      : '+' + FormatCurrency(transaction.value)}
                  </td>
                </tr>
              ))
            ) : (
              <h1>Sem lançamentos</h1>
            )}
          </Tbody>
        </Table>
      </Grid>
    </Container>
  );
}

export default BoxTransaction;
