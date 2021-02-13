import { Container, Header, Grid } from './styles';

function Transaction() {
  return (
    <Container>
      <Header>
        <h2>Mais recente lançamento</h2>
      </Header>
      <Grid>
        <ul>
          <li>
            <span>06/02</span>
          </li>
          <li>Eduardo</li>
          <li>
            <span>Salario</span>
          </li>
          <li>
            R$<span> + 150,00</span>
          </li>
        </ul>
      </Grid>
      <Grid red>
        <ul>
          <li>
            <span>06/02</span>
          </li>
          <li>Eduardo</li>
          <li>
            <span>Salario</span>
          </li>
          <li>
            R$<span> - 150,00</span>
          </li>
        </ul>
      </Grid>
      <Grid>
        <ul>
          <li>
            <span>06/02</span>
          </li>
          <li>Eduardo</li>
          <li>
            <span>Salario</span>
          </li>
          <li>
            R$<span> + 150,00</span>
          </li>
        </ul>
      </Grid>
    </Container>
  );
}

export default Transaction;
