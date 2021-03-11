import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatDate from '../../utils/FormatDate';

import { Container, Header, Grid, Table, Tbody } from './styles';

function CardExternal() {
  const { transactions } = useContext(Context);

  return (
    <Container>
      <Header>
        <h4>Cartão de crédito</h4>
      </Header>
      <Grid>
        <Table>
          {transactions && transactions.length > 0 ? (
            transactions.map((transaction, key) => (
              <Tbody key={key}>
                <tr className={transaction.type === 'despesa' ? 'active' : ''}>
                  {transaction.operation === 'cartao' && (
                    <>
                      <td>{FormatDate(transaction.data)}</td>
                      <td>{transaction.category}</td>
                      <td>
                        R${' '}
                        {transaction.type === 'despesa'
                          ? '-' + FormatCurrency(transaction.value)
                          : '+' + FormatCurrency(transaction.value)}
                      </td>
                    </>
                  )}
                </tr>
              </Tbody>
            ))
          ) : (
            <Tbody>
              <tr>
                <td>
                  <p className="notTran">Sem lançamentos</p>
                </td>
              </tr>
            </Tbody>
          )}
        </Table>
      </Grid>
    </Container>
  );
}

export default CardExternal;
