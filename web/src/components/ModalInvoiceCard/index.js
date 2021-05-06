import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';

import { Context } from '../../Context/Context';

import FormatUppercase from '../../utils/FormatUppercase';
import FormatCurrency from '../../utils/FormatCurrency';
import FormatDate from '../../utils/FormatDate';

import {
  Grid,
  Select,
  Header,
  Body,
  Balance,
  Vencimen,
  Transactions,
  Table,
  Tbody,
  IconClose,
} from './styles';

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

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '900px',
    maxHeight: '600px',
    height: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalInvoiceCard({ isOpen, onChange, data }) {
  const { invoceCreditCard, handleShowInvoceCreditCard } = useContext(Context);

  const { creditCards, transactions } = invoceCreditCard;

  const [monthCurrent, setMonthCurrent] = useState('');
  const [dateCurrent, setDateCurrent] = useState('');

  function closeModal() {
    onChange(false);
  }

  useEffect(() => {
    const dateCurrent = new Date();

    const month = moment(dateCurrent, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
      'MMMM'
    );

    setMonthCurrent(month);
  }, []);

  function handleChange(event) {
    const { value } = event.target;
    const monthConvert = moment().month(value).format('MM');
    handleShowInvoceCreditCard(creditCards._id, monthConvert);
    setDateCurrent(value);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Card"
      >
        <Grid>
          <IconClose onClick={closeModal} />
          <h2>Fatura do cartão</h2>
          <Select name="month" onChange={handleChange}>
            <option value="">Selecione...</option>
            {month.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </Select>
          <Header>
            <p>{data && FormatUppercase(data.bank)}</p>
            <p>|</p>
            <span>{dateCurrent ? dateCurrent : monthCurrent} 2021</span>
          </Header>
          <Body>
            <Balance>
              <p>Valor da fatura:</p>
              <span>
                R$ {creditCards && FormatCurrency(creditCards.cardBalance)}
              </span>
            </Balance>
            <Vencimen>
              <p>Vecimento</p>
              <span>{creditCards && creditCards.win}</span>
            </Vencimen>
          </Body>
          <Transactions>
            <Table>
              {transactions && transactions.length > 0 ? (
                transactions.map((transaction, key) => (
                  <Tbody key={key}>
                    <tr
                      className={transaction.type === 'despesa' ? 'active' : ''}
                    >
                      <td>{FormatDate(transaction.data)}</td>
                      <td>{FormatUppercase(transaction.operation)}</td>
                      <td>{FormatUppercase(transaction.description)}</td>
                      <td>{transaction.category}</td>
                      <td>
                        R${' '}
                        {transaction.type === 'despesa'
                          ? '-' + FormatCurrency(transaction.value)
                          : '+' + FormatCurrency(transaction.value)}
                      </td>
                    </tr>
                  </Tbody>
                ))
              ) : (
                <Tbody>
                  <tr>
                    <td>
                      <p className="notTran">Sem lançamentos {dateCurrent}</p>
                    </td>
                  </tr>
                </Tbody>
              )}
            </Table>
          </Transactions>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalInvoiceCard;
