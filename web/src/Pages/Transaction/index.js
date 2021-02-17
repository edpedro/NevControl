import { Container, Grid } from './styles';

import QuickAccess from '../../components/QuickAccess';
import Balance from '../../components/Balance';

function Transaction() {
  return (
    <Container>
      <Grid>
        <QuickAccess />
        <Balance />
      </Grid>
    </Container>
  );
}
export default Transaction;
