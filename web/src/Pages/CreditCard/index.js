import React, { useContext } from 'react';

import { Container, Box, Grid } from './styles';

import { Context } from '../../Context/Context';

import Card from '../../components/Card';
import CardNew from '../../components/CardNew';
import BoxTransaction from '../../components/BoxTransaction';
import QuickAccess from '../../components/QuickAccess';

function CreditCard() {
  const { creditCards } = useContext(Context);
  return (
    <Container>
      <Box>
        {creditCards &&
          creditCards.map((creditCard, key) => (
            <Card key={key} creditCard={creditCard} />
          ))}
        <CardNew />
      </Box>
      <Grid>
        <BoxTransaction
          title="Historico Cartão de credito"
          validation="cartao"
        />
        <QuickAccess wsmall={400} hsmall={200} />
      </Grid>
    </Container>
  );
}

export default CreditCard;
