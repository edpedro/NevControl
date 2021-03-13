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
      {balance && balance ? (
        <>
          <Recipe>
            <h2>Receita realizada</h2>
            <AmountRecipe>
              <p>
                R${' '}
                <span>
                  {' '}
                  {balance && FormatCurrency(balance.accountBalance)}
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
                  -{balance && FormatCurrency(balance.negativeBalance)}
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
                <span
                  className={
                    balance && parseInt(balance.currentBalance) < 0 ? 'red' : ''
                  }
                >
                  {' '}
                  {balance && FormatCurrency(balance.currentBalance)}
                </span>
              </p>
              <MoneyIcon />
            </AmountTotal>
          </BoxTotal>
        </>
      ) : (
        <h2>Realizar uma receita ou despesa</h2>
      )}
    </Container>
  );
}

export default Balance;
