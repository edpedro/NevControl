import React from 'react';

import Header from '../components/Header';
import Box from '../components/Box';
import Card from '../components/Card';

import { Container, Grid, CardNew, IconPlus } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Box />
      <Grid>
        <Card />
        <Card />
        <CardNew>
          <IconPlus />
        </CardNew>
      </Grid>
    </Container>
  );
}

export default Home;
