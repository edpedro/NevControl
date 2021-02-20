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
  return (
    <>
      <Container wsmall={wsmall} hsmall={hsmall}>
        <h3>Acesso Rápido</h3>
        <Box>
          <Recipe>
            <Content onClick={() => setIsOpen(!isOpen)}>
              <IconPlus />
              <h3>RECEITA</h3>
            </Content>
          </Recipe>
          <Expense>
            <Content>
              <IconMinus />
              <h3>DESPESA</h3>
            </Content>
          </Expense>
        </Box>
      </Container>
      {isOpen && (
        <ModalTransaction
          isOpen={isOpen}
          onChange={(isOpen) => setIsOpen(isOpen)}
        />
      )}
    </>
  );
}

export default QuickAccess;
