import React from 'react';
import Modal from 'react-modal';

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
        {/* <button onClick={closeModal}>close</button> */}
        <Grid>
          <h2>Adicionar Cartão de Crédito</h2>
          <form>
            <GridName>
              <Label htmlFor="name">Nome da conta</Label>
              <Input type="text" id="name" name="name" />
            </GridName>
            <GridLimit>
              <div>
                <Label htmlFor="limit">Limite</Label>
                <Input type="number" id="limit" name="limit" />
              </div>
            </GridLimit>
            <GridDate>
              <div>
                <Label htmlFor="closeDay">Fechar dia</Label>
                <Input type="month" id="closeDay" name="closeDay" width={240} />
              </div>
              <div>
                <Label htmlFor="winDay">Vence dia</Label>
                <Input type="month" id="winDay" name="winDay" width={240} />
              </div>
            </GridDate>
            <GridInstitution>
              <Label htmlFor="institution">Bandeira/Instituição</Label>
              <Select name="institution" id="institution" width={490}>
                <option value=""></option>
                <option value="nubank">Nubank</option>
                <option value="santander">Santander</option>
              </Select>
            </GridInstitution>
            <Button />
          </form>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalCard;
