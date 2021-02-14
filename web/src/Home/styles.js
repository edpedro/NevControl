import styled from 'styled-components';
import { Plus } from '../styles/Icons';

export const Container = styled.div`
  height: 100%;

  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const GridCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1231px) {
    justify-content: center;
  }
`;

export const CardNew = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 276px;
  height: 135px;
  border-radius: 10px;
  margin-left: 10px;
  background: var(--nevGrey);
  cursor: pointer;
`;

export const IconPlus = styled(Plus)`
  width: 60px;
  height: 60px;
  fill: var(--secondary);
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1231px) {
    justify-content: center;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;
