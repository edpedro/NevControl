import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';
import FormatDate from '../../utils/FormatDate';

import ModalTransaction from '../ModalTransaction';

import {
  Container,
  Header,
  Grid,
  Table,
  Tbody,
  IconEdit,
  IconDelet,
  Select,
  Label,
} from './styles';

moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
});

const month = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

function BoxTransaction({ title, validation }) {
  const {
    transactions,
    handleRemoveTransaction,
    handleShowTransaction,
    stateUpdateCreditCard,
    handleMonthCurrent,
  } = useContext(Context);

  const [datas, setDatas] = useState({});
  const [dateCurrent, setDateCurrent] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [option, setOpen] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    function filterTransactions() {
      if (validation) {
        const newTransactions = Object.values(transactions).filter(
          (transaction) => transaction.operation === validation
        );

        setDatas(newTransactions);
      } else {
        setDatas(transactions);
      }
    }
    filterTransactions();
  }, [validation, transactions]);

  function handleIsOpen(option, id) {
    setOpen(option);
    setIsOpen(!isOpen);
    setId(id);
    handleShowTransaction(id);
  }

  function handleRemove(id) {
    handleRemoveTransaction(id);
    stateUpdateCreditCard(true);
  }

  function handleChange(event) {
    const { value } = event.target;
    const monthConvert = moment().month(value).format('MM');

    setDateCurrent(value);
    handleMonthCurrent(monthConvert);
  }
  return (
    <>
      <Container>
        <Header>
          <div>
            <Label>Filtrar</Label>
            <Select name="month" onChange={handleChange} value={dateCurrent}>
              <option value="">Selecione...</option>
              {month.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </Header>
        <Grid>
          <Table>
            {datas && datas.length > 0 ? (
              datas.map((transaction, key) => (
                <Tbody key={key}>
                  <tr
                    className={transaction.type === 'despesa' ? 'active' : ''}
                  >
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
                      <IconEdit
                        onClick={() =>
                          handleIsOpen(transaction.type, transaction._id)
                        }
                      />{' '}
                      -{' '}
                      <IconDelet
                        onClick={() => {
                          handleRemove(transaction._id);
                        }}
                      />
                    </td>
                  </tr>
                </Tbody>
              ))
            ) : (
              <Tbody>
                <tr>
                  <td>
                    <p className="notTran">Sem lançamentos em {dateCurrent}</p>
                  </td>
                </tr>
              </Tbody>
            )}
          </Table>
        </Grid>
      </Container>
      {isOpen && (
        <ModalTransaction
          option={option}
          isOpen={isOpen}
          onChange={(isOpen) => setIsOpen(isOpen)}
          id={id}
        />
      )}
    </>
  );
}

export default BoxTransaction;
