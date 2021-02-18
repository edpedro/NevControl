import React from 'react';

import Account from '../../components/Account';
import Balance from '../../components/Balance';
import Card from '../../components/Card';
import BoxTransaction from '../../components/BoxTransaction';
import QuickAccess from '../../components/QuickAccess';
import CardExternal from '../../components/CardExternal';
import CardNew from '../../components/CardNew';

import { Container, Box, GridCard, Grid, GridItem } from './styles';

function Home() {
  return (
    <Container>
      <Box>
        <Account />
        <Balance />
      </Box>

      <GridCard>
        <Card />
        <Card />
        <CardNew />
      </GridCard>

      <Grid>
        <BoxTransaction title="Mais recente lançamento" />
        <GridItem>
          <QuickAccess wsmall={300} hsmall={200} />
          <CardExternal />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Home;
