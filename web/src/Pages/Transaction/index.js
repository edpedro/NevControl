import React from 'react';
import { Container, Grid } from './styles';

import QuickAccess from '../../components/QuickAccess';
import Balance from '../../components/Balance';
import BoxTransaction from '../../components/BoxTransaction';
import CardExternal from '../../components/CardExternal';

import PizzaGraph from '../../components/PizzaGraph';

function Transaction() {
  return (
    <Container>
      <header>
        <QuickAccess />
        <Balance />
      </header>
      <main>
        <PizzaGraph
          validation="conta"
          title="Relatorio por Categoria - Conta"
        />
        <BoxTransaction title="Historico Conta" validation="conta" />
        <Grid>
          <CardExternal />
        </Grid>
      </main>
    </Container>
  );
}
export default Transaction;
