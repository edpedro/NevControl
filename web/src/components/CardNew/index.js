import React, { useState } from 'react';

import { Container, IconPlus } from './styles';

import ModalCard from '../ModalCard';

function CardNew() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container onClick={() => setIsOpen(!isOpen)}>
        <p>Novo cartão de credito</p>
        <IconPlus />
      </Container>
      {isOpen && (
        <ModalCard isOpen={isOpen} onChange={(isOpen) => setIsOpen(isOpen)} />
      )}
    </>
  );
}

export default CardNew;
