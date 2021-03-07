import React, { useContext } from 'react';

import { Context } from '../../Context/Context';

import FormatCurrency from '../../utils/FormatCurrency';

import {
  Container,
  Recipe,
  AmountRecipe,
  UpCircle,
  Expense,
  AmountExpense,
  DownCircle,
  MoneyIcon,
  BoxTotal,
  AmountTotal,
} from './styles';

function Balance() {
  const { balance } = useContext(Context);
  return (
    <Container>
      <Recipe>
        <h2>Receita realizada</h2>
        <AmountRecipe>
          <p>
            R${' '}
            <span>
              {' '}
              {FormatCurrency(
                balance.accountBalance ? balance.accountBalance : 0
              )}
            </span>
          </p>
          <UpCircle />
        </AmountRecipe>
      </Recipe>
      <Expense>
        <h2>Despesa realizada</h2>
        <AmountExpense>
          <p>
            R$
            <span className="red">
              {' '}
              -
              {FormatCurrency(
                balance.negativeBalance ? balance.negativeBalance : 0
              )}
            </span>
          </p>
          <DownCircle />
        </AmountExpense>
      </Expense>
      <BoxTotal>
        <h2>Saldo atual</h2>
        <AmountTotal>
          <p>
            R$
            <span>
              {' '}
              {FormatCurrency(
                balance.currentBalance ? balance.currentBalance : 0
              )}
            </span>
          </p>
          <MoneyIcon />
        </AmountTotal>
      </BoxTotal>
    </Container>
  );
}

export default Balance;
