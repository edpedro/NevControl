import React from 'react';
import Modal from 'react-modal';

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

function ModalTransaction({ isOpen, onChange }) {
  function closeModal() {
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
        {/* <button onClick={closeModal}>close</button> */}
        <Grid>
          <h2>Nova receita</h2>
          <form>
            <GridDescription>
              <Label htmlFor="description">Descrição</Label>
              <Input type="text" id="description" name="description" />
            </GridDescription>
            <GridValueDate>
              <div>
                <Label htmlFor="value">Valor</Label>
                <Input type="number" id="value" name="value" width={240} />
              </div>
              <div>
                <Label htmlFor="date">Data</Label>
                <Input type="date" id="date" name="date" width={240} />
              </div>
            </GridValueDate>
            <GridCategoryAccountCard>
              <div>
                <Label>
                  Conta/cartão
                  <Select>
                    <option value="conta">Conta</option>
                    <option value="cartao">Cartão</option>
                  </Select>
                </Label>
              </div>
              <div>
                <Label>
                  Categoria
                  <Select>
                    <option value=""></option>
                    <option value="alimentação">Alimentação</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </Select>
                </Label>
              </div>
            </GridCategoryAccountCard>
            <GridType>
              <Label htmlFor="type">Tipo</Label>
              <Select name="type" id="type" width={490}>
                <option value=""></option>
                <option value="donoConta">Dono conta</option>
                <option value="pessoaExterna">Pessoa externa</option>
              </Select>
            </GridType>
            <Button title="Adicionar" />
          </form>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalTransaction;
