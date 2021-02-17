import styled from 'styled-components';
import {
  ArrowDownCircleFill,
  MoneyDollarCircle,
  ArrowUpCircleFill,
} from '../../styles/Icons';

export const Container = styled.div`
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  height: 228px;
  margin: 0 10px;
  padding: 30px 70px;

  @media (max-width: 1283px) {
    width: 526px;
  }
`;
export const Recipe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--secondary);
  }
`;
export const AmountRecipe = styled.div`
  display: flex;

  > p {
    font-size: 12px;

    > span {
      margin-right: 12px;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
export const UpCircle = styled(ArrowUpCircleFill)`
  width: 24px;
  height: 24px;
  fill: var(--nevGree);
`;
export const Expense = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--secondary);
  }
`;

export const AmountExpense = styled.div`
  display: flex;

  > p {
    font-size: 12px;

    > span {
      margin-right: 17px;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
export const DownCircle = styled(ArrowDownCircleFill)`
  width: 24px;
  height: 24px;
  fill: var(--nevRed);
`;
export const BoxTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  padding: 20px 0;
  border-top: 1px solid var(--nevGrey);
`;
export const MoneyIcon = styled(MoneyDollarCircle)`
  width: 32px;
  height: 32px;
  fill: var(--nevBrack);
`;
export const AmountTotal = styled.div`
  display: flex;

  > p {
    font-size: 12px;
    > span {
      margin-right: 17px;
      font-weight: 700;
      font-size: 22px;
      color: var(--nevGree);
    }
  }
`;
