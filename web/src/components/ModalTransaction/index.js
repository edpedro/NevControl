import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';

import { Context } from '../../Context/Context';

import {
  Grid,
  Input,
  Label,
  GridDescription,
  GridValueDate,
  GridCategoryAccountCard,
  Select,
  GridType,
} from './styles';

import Button from '../Button';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '600px',
    height: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalTransaction({ isOpen, onChange, option, id }) {
  const {
    handleCreateTransaction,
    updateTransaction,
    creditCards,
    stateUpdateCreditCard,
  } = useContext(Context);

  const [data, setData] = useState({
    description: '',
    value: '',
    data: '',
    category: '',
    operation: '',
    accountCard: null,
  });

  useEffect(() => {
    if (updateTransaction) {
      setData(updateTransaction);
    }
  }, [id, updateTransaction]);

  function closeModal() {
    onChange(false);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value, type: option }));
  }
  async function handleSubmint(event) {
    event.preventDefault();

    handleCreateTransaction(data, id);

    stateUpdateCreditCard(true);

    onChange(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Transaction"
      >
        <Grid option={option}>
          <h2>Nova {option}</h2>
          <form onSubmit={handleSubmint}>
            <GridDescription>
              <Label htmlFor="description">Descrição</Label>
              <Input
                type="text"
                id="description"
                name="description"
                onChange={handleChange}
                value={data.description || ''}
              />
            </GridDescription>
            <GridValueDate>
              <div>
                <Label htmlFor="value">Valor</Label>
                <Input
                  type="number"
                  id="number"
                  name="value"
                  width={240}
                  onChange={handleChange}
                  value={data.value || false}
                />
              </div>
              <div>
                <Label htmlFor="data">Data</Label>
                <Input
                  type="date"
                  id="date"
                  name="data"
                  width={240}
                  onChange={handleChange}
                  value={data.data || ''}
                />
              </div>
            </GridValueDate>
            <GridCategoryAccountCard>
              <div>
                <Label>
                  Conta/cartão
                  <Select
                    name="operation"
                    onChange={handleChange}
                    value={data && data.operation}
                  >
                    <option value=""></option>
                    <option value="conta">Conta</option>
                    <option value="cartao">Cartão</option>
                  </Select>
                </Label>
              </div>
              <div>
                <Label>
                  Categoria
                  <Select
                    name="category"
                    onChange={handleChange}
                    value={data.category || false}
                  >
                    <option value=""></option>
                    <option value="alimentação">Alimentação</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </Label>
              </div>
            </GridCategoryAccountCard>
            {data.operation === 'cartao' && (
              <GridType>
                <Label htmlFor="accountCard">Bandeira</Label>
                <Select
                  name="accountCard"
                  id="accountCard"
                  width={490}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {creditCards &&
                    creditCards.map((creditCard) => (
                      <option value={creditCard._id}>{creditCard.bank}</option>
                    ))}
                </Select>
              </GridType>
            )}
            <Button title="Adicionar" />
          </form>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalTransaction;
