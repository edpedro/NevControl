import React, { useContext, useState, useEffect } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatDate from '../../utils/FormatDate';

import { Container, Header, Grid, Table, Tbody } from './styles';

function CardExternal() {
  const { transactions } = useContext(Context);

  const [datas, setDatas] = useState({});

  useEffect(() => {
    function filterTransactions() {
      const result = Object.values(transactions).filter(
        (transaction) => transaction.operation === 'cartao'
      );
      setDatas(result);
    }
    filterTransactions();
  }, [transactions]);

  return (
    <Container>
      <Header>
        <h4>Cartão de crédito</h4>
      </Header>
      <Grid>
        <Table>
          {datas && datas.length > 0 ? (
            datas.map((transaction, key) => (
              <Tbody key={key}>
                <tr className={transaction.type === 'despesa' ? 'active' : ''}>
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
