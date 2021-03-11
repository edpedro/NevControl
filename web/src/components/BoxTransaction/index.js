import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';
import FormatDate from '../../utils/FormatDate';

import {
  Container,
  Header,
  Grid,
  Table,
  Tbody,
  IconEdit,
  IconDelet,
} from './styles';

function BoxTransaction({ title, validation }) {
  const { transactions, handleRemoveTransaction } = useContext(Context);

  function handleRemove(id) {
    handleRemoveTransaction(id);
  }

  return (
    <Container>
      <Header>
        <h2>{transactions && transactions.length > 0 && title}</h2>
      </Header>
      <Grid>
        <Table>
          {transactions && transactions.length > 0 ? (
            transactions.map((transaction, key) => (
              <Tbody key={key}>
                <tr className={transaction.type === 'despesa' ? 'active' : ''}>
                  {validation
                    ? transaction.operation === 'conta' && (
                        <>
                          <td>{FormatDate(transaction.data)}</td>
                          <td>{FormatUppercase(transaction.operation)}</td>
                          <td>{transaction.category}</td>
                          <td>
                            R${' '}
                            {transaction.type === 'despesa'
                              ? '-' + FormatCurrency(transaction.value)
                              : '+' + FormatCurrency(transaction.value)}
                          </td>
                          <td>
                            <IconEdit /> -{' '}
                            <IconDelet
                              onClick={() => {
                                handleRemove(transaction._id);
                              }}
                            />
                          </td>
                        </>
                      )
                    : transaction.operation === 'cartao' && (
                        <>
                          <td>{FormatDate(transaction.data)}</td>
                          <td>{FormatUppercase(transaction.operation)}</td>
                          <td>{transaction.category}</td>
                          <td>
                            R${' '}
                            {transaction.type === 'despesa'
                              ? '-' + FormatCurrency(transaction.value)
                              : '+' + FormatCurrency(transaction.value)}
                          </td>
                          <td>
                            <IconEdit /> -{' '}
                            <IconDelet
                              onClick={() => {
                                handleRemove(transaction._id);
                              }}
                            />
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

export default BoxTransaction;
