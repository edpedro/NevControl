import React from 'react';

import Account from '../../components/Account';
import Balance from '../../components/Balance';
import Card from '../../components/Card';
import BoxTransaction from '../../components/BoxTransaction';
import QuickAccess from '../../components/QuickAccess';
import CardExternal from '../../components/CardExternal';

import {
  Container,
  Box,
  GridCard,
  CardNew,
  IconPlus,
  Grid,
  GridItem,
} from './styles';

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
        <CardNew>
          <IconPlus />
        </CardNew>
      </GridCard>

      <Grid>
        <BoxTransaction />
        <GridItem>
          <QuickAccess wsmall={300} hsmall={200} />
          <CardExternal />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Home;
