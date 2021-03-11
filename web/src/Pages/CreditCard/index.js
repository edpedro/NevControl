import React from 'react';

import { Container, Box, Grid } from './styles';

import Card from '../../components/Card';
import CardNew from '../../components/CardNew';
import BoxTransaction from '../../components/BoxTransaction';
import QuickAccess from '../../components/QuickAccess';

function CreditCard() {
  return (
    <Container>
      <Box>
        <Card />
        <Card />
        <CardNew />
      </Box>
      <Grid>
        <BoxTransaction
          title="Historico Cartão de credito"
          validation={false}
        />
        <QuickAccess wsmall={400} hsmall={200} />
      </Grid>
    </Container>
  );
}

export default CreditCard;
