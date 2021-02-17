import React from 'react';

import {
  Container,
  BoxExit,
  AmountExit,
  DownCircle,
  BoxTotal,
  AmountTotal,
  MoneyIcon,
  BoxButton,
  Button,
} from './styles';

function Balance() {
  return (
    <Container>
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
    </Container>
  );
}

export default Balance;
