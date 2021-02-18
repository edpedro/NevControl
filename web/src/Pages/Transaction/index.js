import { Container, Grid } from './styles';

import QuickAccess from '../../components/QuickAccess';
import Balance from '../../components/Balance';
import BoxTransaction from '../../components/BoxTransaction';
import CardExternal from '../../components/CardExternal';

function Transaction() {
  return (
    <Container>
      <header>
        <QuickAccess />
        <Balance />
      </header>
      <main>
        <BoxTransaction title="Historico Conta" />
        <Grid>
          <CardExternal />
        </Grid>
      </main>
    </Container>
  );
}
export default Transaction;
