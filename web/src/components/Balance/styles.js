import styled from 'styled-components';
import { ArrowDownCircleFill, MoneyDollarCircle } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  height: 228px;
  margin: 0 10px;

  @media (max-width: 1283px) {
    width: 526px;
  }
`;
export const BoxExit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 30px;

  h2 {
    font-size: 20px;
  }
`;
export const AmountExit = styled.div`
  display: flex;

  > p {
    font-size: 12px;

    > span {
      margin-right: 10px;
      font-weight: 700;
      font-size: 20px;
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
  align-items: center;
  justify-content: space-around;

  margin-top: 15px;

  h2 {
    font-size: 20px;
  }
`;

export const AmountTotal = styled.div`
  display: flex;
  > p {
    font-size: 12px;
    margin-left: 30px;
    > span {
      margin-right: 10px;
      font-weight: 700;
      font-size: 20px;
    }
  }
`;
export const MoneyIcon = styled(MoneyDollarCircle)`
  width: 29px;
  height: 29px;
  fill: var(--nevBrack);
`;
export const BoxButton = styled.div`
  padding: 30px 30px;
`;

export const Button = styled.div`
  height: 61px;
  width: 192px;
  border-radius: 12px;
  background: var(--nevGree);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  cursor: pointer;
  > span {
    font-size: 18px;
    color: var(--white);
    font-weight: 700;
  }
  &:hover {
    background: #057062;
  }
`;
