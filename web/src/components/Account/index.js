import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';
import FormatUppercase from '../../utils/FormatUppercase';

import { Container, Header, UpArrowCircle, Main } from './styles';

function Account() {
  const { user, balance } = useContext(Context);

  function checkHours() {
    const result = new Date();
    const hours = result.getHours();

    if (hours >= 18 && hours < 24) {
      return 'Boa noite';
    }
    if (hours >= 12 && hours < 18) {
      return 'Boa tarde';
    }
    if (hours >= 0 && hours < 12) {
      return 'Boa dia';
    }
  }

  return (
    <Container>
      <Header>
        <h3>Minha conta</h3>
        <UpArrowCircle />
      </Header>
      <Main>
        <h2>
          {checkHours()}, {FormatUppercase(user)}
        </h2>
        <p>
          R${' '}
          <span>
            {FormatCurrency(
              balance.accountBalance ? balance.accountBalance : 0
            )}
          </span>
        </p>
        <h4>Saldo geral</h4>
      </Main>
    </Container>
  );
}

export default Account;
