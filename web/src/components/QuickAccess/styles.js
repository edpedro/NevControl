import styled from 'styled-components';
import { Plus, MinusSm } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 350px;
  height: 200px;
  margin: 30px 10px;
  padding: 10px 40px;
  border-radius: 10px;
  background: var(--white);

  h3 {
    font-size: 16px;
    font-weight: 600;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;
export const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--nevGrey);
  border-radius: 6px;
  margin-right: 30px;
  width: 121px;
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-top: 8px;
    color: var(--secondary);
  }
`;
export const IconPlus = styled(Plus)`
  fill: var(--nevGree);
  background: var(--white_1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--nevGrey);
    fill: var(--nevGree);
  }
`;
export const Expense = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--nevGrey);
  border-radius: 6px;
  width: 121px;
  height: 100px;
`;
export const IconMinus = styled(MinusSm)`
  background: var(--white_1);
  fill: var(--nevRed);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--nevGrey);
    fill: var(--nevRed);
  }
`;
