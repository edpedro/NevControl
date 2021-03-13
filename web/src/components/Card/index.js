import { Container, Header, Main, Invoice, Limit } from './styles.js';

import FormatUppercase from '../../utils/FormatUppercase';
import FormatCurrency from '../../utils/FormatCurrency';

import iconSantander from '../../assets/st.png';

function Card({ creditCard }) {
  console.log(creditCard);
  return (
    <Container>
      <Header>
        <h3>{creditCard && FormatUppercase(creditCard.bank)}</h3>
        <img src={iconSantander} alt="icone santander" />
      </Header>
      <Main>
        <Invoice>
          <h4>Fatura atual:</h4>
          <p>
            R${' '}
            <span>{creditCard && FormatCurrency(creditCard.cardBalance)}</span>
          </p>
        </Invoice>
        <Limit>
          <h4>Limite disponivel:</h4>
          <p>
            R${' '}
            <span>
              {creditCard &&
                FormatCurrency(creditCard.limit - creditCard.cardBalance)}
            </span>
          </p>
        </Limit>
      </Main>
    </Container>
  );
}

export default Card;
