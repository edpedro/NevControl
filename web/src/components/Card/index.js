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
  TextInvoice,
} from './styles.js';

import ModalCard from '../ModalCard';
import ModalInvoiceCard from '../ModalInvoiceCard';

import FormatUppercase from '../../utils/FormatUppercase';
import FormatCurrency from '../../utils/FormatCurrency';

function Card({ creditCard }) {
  const {
    handleShowCreditCard,
    handleRemoveCreditCard,
    stateUpdateCreditCard,
    stateUpdateTransaction,
    handleShowInvoceCreditCard,
  } = useContext(Context);

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenInv, setIsOpenInv] = useState(false);
  const [id, setId] = useState('');
  const [data, setData] = useState({});

  // function handleIsOpen(id) {
  //   setIsOpen(!isOpen);
  //   setId(id);
  //   handleShowCreditCard(id);
  // }
  function handleRemove(id) {
    handleRemoveCreditCard(id);
    stateUpdateCreditCard(true);
    stateUpdateTransaction(true);
  }
  function handleIsOpenEdit(id) {
    setIsOpenEdit(!isOpenEdit);
    setId(id);
    handleShowCreditCard(id);
  }
  function handleIsOpenInvoice(data) {
    setIsOpenInv(!isOpenInv);
    setId(data._id);
    handleShowInvoceCreditCard(data._id);
    setData(data);
  }
  return (
    <>
      <Container>
        <Header>
          <h3>{creditCard && FormatUppercase(creditCard.bank)}</h3>
          <IconGrid>
            <IconEdit onClick={() => handleIsOpenEdit(creditCard._id)} />

            <IconDelet
              onClick={() => {
                handleRemove(creditCard._id);
              }}
            />
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
          <TextInvoice onClick={() => handleIsOpenInvoice(creditCard)}>
            <p>Ver Fatura</p>
          </TextInvoice>
        </Main>
      </Container>
      {isOpenEdit && (
        <ModalCard
          isOpen={isOpenEdit}
          onChange={(isOpenEdit) => setIsOpenEdit(isOpenEdit)}
          id={id}
        />
      )}
      {isOpenInv && (
        <ModalInvoiceCard
          isOpen={isOpenInv}
          onChange={(isOpenInv) => setIsOpenInv(isOpenInv)}
          id={id}
          data={data}
        />
      )}
    </>
  );
}

export default Card;
