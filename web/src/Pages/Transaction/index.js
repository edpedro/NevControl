import React, { useContext } from 'react';
import { Container, Grid } from './styles';

import QuickAccess from '../../components/QuickAccess';
import Balance from '../../components/Balance';
import BoxTransaction from '../../components/BoxTransaction';
import CardExternal from '../../components/CardExternal';

import { Context } from '../../Context/Context';

function Transaction() {
  const { transactions } = useContext(Context);
  return (
    <Container>
      <header>
        <QuickAccess />
        <Balance />
      </header>
      <main>
        <BoxTransaction title="Historico Conta" validation={true} />
        <Grid>
          {transactions &&
            transactions.length > 0 &&
            transactions.map(
              (transaction) =>
                transaction.operation === 'cartao' && <CardExternal />
            )}
        </Grid>
      </main>
    </Container>
  );
}
export default Transaction;
