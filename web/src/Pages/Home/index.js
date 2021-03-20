import React, { useContext } from 'react';

import Account from '../../components/Account';
import Balance from '../../components/Balance';
import Card from '../../components/Card';
import BoxTransaction from '../../components/BoxTransaction';
import QuickAccess from '../../components/QuickAccess';
import CardExternal from '../../components/CardExternal';
import CardNew from '../../components/CardNew';

import { Context } from '../../Context/Context';

import { Container, Box, GridCard, Grid, GridItem } from './styles';

function Home() {
  const { creditCards, transactions } = useContext(Context);

  return (
    <Container>
      <Box>
        <Account />
        <Balance />
      </Box>

      <GridCard>
        {creditCards &&
          creditCards.map((creditCard, key) => (
            <Card key={key} creditCard={creditCard} />
          ))}

        <CardNew />
      </GridCard>

      <Grid>
        <BoxTransaction title="Mais recente lançamento" validation={true} />
        <GridItem>
          <QuickAccess wsmall={400} hsmall={200} />
          {transactions &&
            transactions.length > 0 &&
            transactions.map(
              (transaction) =>
                transaction.operation === 'cartao' && <CardExternal />
            )}
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Home;
