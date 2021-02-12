import { Container, Header, Main, Invoice, Limit } from './styles.js';

import iconSantander from '../../assets/st.png';

function Card() {
  return (
    <Container>
      <Header>
        <h3>Santander</h3>
        <img src={iconSantander} alt="icone santander" />
      </Header>
      <Main>
        <Invoice>
          <h4>Fatura atual:</h4>
          <p>
            R$ <span>150,00</span>
          </p>
        </Invoice>
        <Limit>
          <h4>Limite disponivel:</h4>
          <p>
            R$ <span> 960,00</span>
          </p>
        </Limit>
      </Main>
    </Container>
  );
}

export default Card;
