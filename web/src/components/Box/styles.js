import styled from "styled-components";
import {
  ArrowUpCircleFill,
  ArrowDownCircleFill,
  MoneyDollarCircle,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px 0;
  width: 100%;

  @media (max-width: 1265px) {
    justify-content: center;
    font-size: 50%;
  }
`;
export const BoxAccount = styled.div`
  background: var(--nevGree);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 100%;
  max-width: 526px;
  height: 228px;
  margin: 4px 10px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 14px 30px;

  > h3 {
    color: var(--white);
    font-size: 16px;
  }
`;
export const UpArrowCircle = styled(ArrowUpCircleFill)`
  width: 24px;
  height: 24px;
  fill: var(--white);
`;
export const Main = styled.div`
  > h2,
  p,
  h4 {
    display: flex;
    justify-content: center;
  }
  > h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--white);
  }
  > p {
    align-items: center;

    color: var(--white);
    font-size: 14px;
    margin-top: 18px;

    > span {
      font-size: 26px;
      font-weight: 700;
      margin: 0 5px 6px;
      color: var(--white);
    }
  }

  > h4 {
    margin-top: 16px;
    color: var(--white);
  }
`;
export const BoxTransaction = styled.div`
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  height: 228px;
  margin: 0 10px;

  @media (max-width: 1265px) {
    width: 526px;
  }
`;
export const BoxExit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 30px;
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
