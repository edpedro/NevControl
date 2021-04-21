import React from 'react';
import Modal from 'react-modal';

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

function ModalInvoiceCard({ isOpen, onChange }) {
  function closeModal() {
    onChange(false);
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
          <h2>Fatura do cartão</h2>
          <Select name="month">
            <option value="">Selecione...</option>
            {month.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </Select>
          <Header>
            <p>Santander</p>
            <p>|</p>
            <span>Maio 2021</span>
          </Header>
          <Body>
            <Balance>
              <p>Valor da fatura:</p>
              <span>R$ 250,00</span>
            </Balance>
            <Vencimen>
              <p>Vecimento</p>
              <span>17/05/2021</span>
            </Vencimen>
          </Body>
          <Transactions>
            <Table>
              <Tbody>
                <tr className="active">
                  <td>16/04/2021</td>
                  <td>Cartão</td>
                  <td>Alimento</td>
                  <td>R$ 160</td>
                </tr>
              </Tbody>
            </Table>
          </Transactions>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalInvoiceCard;
