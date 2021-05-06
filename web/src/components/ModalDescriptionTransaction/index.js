import React from 'react';

import Modal from 'react-modal';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';
import FormatDate from '../../utils/FormatDate';

import { Grid, Body, IconClose } from './styles';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '420px',
    maxHeight: '210px',
    height: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalDescriptionTransaction({ isOpen, onChange, option }) {
  function closeModal() {
    onChange(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Description Transaction"
      >
        <Grid>
          <IconClose onClick={closeModal} />
          <h2>Detalhe da compra</h2>
          <Body>
            <h3>
              {option.accountCard
                ? FormatUppercase(option.accountCard.bank)
                : FormatUppercase(option.operation)}
            </h3>
            <h4>{FormatUppercase(option.description)}</h4>
            <p>R$ {FormatCurrency(option.value)}</p>
            <span>{FormatDate(option.data)}</span>
          </Body>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalDescriptionTransaction;
