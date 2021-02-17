import React from 'react';

import { Container, Header, UpArrowCircle, Main } from './styles';

function Account() {
  return (
    <Container>
      <Header>
        <h3>Minha conta</h3>
        <UpArrowCircle />
      </Header>
      <Main>
        <h2>Boa tarde, Eduardo</h2>
        <p>
          R$ <span>1.500,00</span>
        </p>
        <h4>Saldo geral</h4>
      </Main>
    </Container>
  );
}

export default Account;
