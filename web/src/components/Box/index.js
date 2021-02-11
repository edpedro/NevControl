import React from 'react';

import {
  Container,
  BoxAccount,
  Header,
  UpArrowCircle,
  Main,
  BoxTransaction,
  BoxExit,
  AmountExit,
  DownCircle,
  BoxTotal,
  AmountTotal,
  MoneyIcon,
  BoxButton,
  Button,
} from './styles';

function Box() {
  return (
    <Container>
      <BoxAccount>
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
      </BoxAccount>
      <BoxTransaction>
        <BoxExit>
          <h2>Saídas</h2>
          <AmountExit>
            <p>
              R$ <span>-700,23</span>
            </p>
            <DownCircle />
          </AmountExit>
        </BoxExit>
        <BoxTotal>
          <h2>Total</h2>
          <AmountTotal>
            <p>
              R$<span> 500,10</span>
            </p>
            <MoneyIcon />
          </AmountTotal>
        </BoxTotal>
        <BoxButton>
          <Button>
            <span>Historico</span>
          </Button>
        </BoxButton>
      </BoxTransaction>
    </Container>
  );
}

export default Box;
