import React, { useState } from 'react';
import {
  Container,
  Box,
  Recipe,
  Content,
  IconPlus,
  Expense,
  IconMinus,
} from './styles';

import ModalTransaction from '../ModalTransaction';

function QuickAccess({ wsmall, hsmall }) {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOpen] = useState('');

  function handleIsOpen(option) {
    setOpen(option);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Container wsmall={wsmall} hsmall={hsmall}>
        <h3>Acesso Rápido</h3>
        <Box>
          <Recipe>
            <Content onClick={() => handleIsOpen('receita')}>
              <IconPlus />
              <h3>RECEITA</h3>
            </Content>
          </Recipe>
          <Expense>
            <Content onClick={() => handleIsOpen('despesa')}>
              <IconMinus />
              <h3>DESPESA</h3>
            </Content>
          </Expense>
        </Box>
      </Container>
      {isOpen && (
        <ModalTransaction
          option={option}
          isOpen={isOpen}
          onChange={(isOpen) => setIsOpen(isOpen)}
        />
      )}
    </>
  );
}

export default QuickAccess;
