import React from 'react';

import Header from '../components/Header';
import Box from '../components/Box';
import Card from '../components/Card';
import Transaction from '../components/Transaction';

import { Container, GridCard, CardNew, IconPlus, Grid } from './styles';

function Home() {
  return (
    <Container>
      <Header />
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
      </Grid>
    </Container>
  );
}

export default Home;
