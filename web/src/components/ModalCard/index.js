import React, { useState, useContext } from 'react';
import Modal from 'react-modal';

import { Context } from '../../Context/Context';

import {
  Grid,
  Input,
  Label,
  GridName,
  GridLimit,
  GridDate,
  Select,
  GridInstitution,
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

function ModalCard({ isOpen, onChange }) {
  const { handleCreateCreditCard } = useContext(Context);
  const [data, setData] = useState({
    name: '',
    limit: '',
    close: '',
    win: '',
    bank: '',
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

    handleCreateCreditCard(data);

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
          <h2>Adicionar Cartão de Crédito</h2>
          <form onSubmit={handleSubmint}>
            <GridName>
              <Label htmlFor="name">Nome da conta</Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={data.name || ''}
              />
            </GridName>
            <GridLimit>
              <div>
                <Label htmlFor="limit">Limite</Label>
                <Input
                  type="number"
                  id="limit"
                  name="limit"
                  onChange={handleChange}
                  value={data.limit || ''}
                />
              </div>
            </GridLimit>
            <GridDate>
              <div>
                <Label htmlFor="close">Fechar dia</Label>
                <Input
                  type="month"
                  id="close"
                  name="close"
                  width={240}
                  onChange={handleChange}
                  value={data.close || ''}
                />
              </div>
              <div>
                <Label htmlFor="winDay">Vence dia</Label>
                <Input
                  type="month"
                  id="win"
                  name="win"
                  width={240}
                  onChange={handleChange}
                  value={data.win || ''}
                />
              </div>
            </GridDate>
            <GridInstitution>
              <Label htmlFor="bank">Bandeira/Instituição</Label>
              <Select
                name="bank"
                id="bank"
                width={490}
                onChange={handleChange}
                value={data.bank || ''}
              >
                <option value=""></option>
                <option value="nubank">Nubank</option>
                <option value="santander">Santander</option>
              </Select>
            </GridInstitution>
            <Button title="Adicionar" />
          </form>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalCard;
