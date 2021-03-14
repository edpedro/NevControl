import React, { useContext, useState } from 'react';

import { Context } from '../../Context/Context';

import {
  Container,
  Header,
  Main,
  Invoice,
  Limit,
  IconGrid,
  IconEdit,
  IconDelet,
} from './styles.js';

import ModalCard from '../ModalCard';

import FormatUppercase from '../../utils/FormatUppercase';
import FormatCurrency from '../../utils/FormatCurrency';

function Card({ creditCard }) {
  const { handleShowCreditCard } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');

  function handleIsOpen(id) {
    setIsOpen(!isOpen);
    setId(id);
    handleShowCreditCard(id);
  }
  return (
    <>
      <Container>
        <Header>
          <h3>{creditCard && FormatUppercase(creditCard.bank)}</h3>
          <IconGrid>
            <IconEdit onClick={() => handleIsOpen(creditCard._id)} />

            <IconDelet />
          </IconGrid>
        </Header>
        <Main>
          <Invoice>
            <h4>Fatura atual:</h4>
            <p>
              R${' '}
              <span>
                {creditCard && FormatCurrency(creditCard.cardBalance)}
              </span>
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
      {isOpen && (
        <ModalCard
          isOpen={isOpen}
          onChange={(isOpen) => setIsOpen(isOpen)}
          id={id}
        />
      )}
    </>
  );
}

export default Card;
