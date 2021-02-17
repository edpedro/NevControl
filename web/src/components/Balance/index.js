import React from 'react';

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
  return (
    <Container>
      <Recipe>
        <h2>Receita realizada</h2>
        <AmountRecipe>
          <p>
            R$ <span>-700,23</span>
          </p>
          <UpCircle />
        </AmountRecipe>
      </Recipe>
      <Expense>
        <h2>Despesa realizada</h2>
        <AmountExpense>
          <p>
            R$<span> 500,10</span>
          </p>
          <DownCircle />
        </AmountExpense>
      </Expense>
      <BoxTotal>
        <h2>Saldo atual</h2>
        <AmountTotal>
          <p>
            R$<span> 300,10</span>
          </p>
          <MoneyIcon />
        </AmountTotal>
      </BoxTotal>
    </Container>
  );
}

export default Balance;
