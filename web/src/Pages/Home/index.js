import React from 'react';

import Box from '../../components/Box';
import Card from '../../components/Card';
import Transaction from '../../components/Transaction';
import QuickAccess from '../../components/QuickAccess';
import CardExternal from '../../components/CardExternal';

import {
  Container,
  GridCard,
  CardNew,
  IconPlus,
  Grid,
  GridItem,
} from './styles';

function Home() {
  return (
    <Container>
      <Box />

      <GridCard>
        <Card />
        <Card />
        <CardNew>
          <IconPlus />
        </CardNew>
      </GridCard>

      <Grid>
        <Transaction />
        <GridItem>
          <QuickAccess />
          <CardExternal />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Home;
