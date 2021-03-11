import React, { useState, useContext } from 'react';
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

function ModalTransaction({ isOpen, onChange, option }) {
  const { handleCreateTransaction } = useContext(Context);

  const [data, setData] = useState({
    type: option,
    description: '',
    value: '',
    data: '',
    category: '',
    operation: '',
    accountCard: null,
  });

  function closeModal() {
    onChange(false);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  }
  async function handleSubmint(event) {
    event.preventDefault();

    handleCreateTransaction(data);
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
                />
              </div>
            </GridValueDate>
            <GridCategoryAccountCard>
              <div>
                <Label>
                  Conta/cartão
                  <Select name="operation" onChange={handleChange}>
                    <option value=""></option>
                    <option value="conta">Conta</option>
                    <option value="cartao">Cartão</option>
                  </Select>
                </Label>
              </div>
              <div>
                <Label>
                  Categoria
                  <Select name="category" onChange={handleChange}>
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
                  <option value="asdasd321651">Santander</option>
                  <option value="asdasd321651">Itau</option>
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
