import styled from 'styled-components';
import { Plus } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 276px;
  height: 135px;
  border-radius: 10px;
  margin-left: 10px;
  background: var(--nevGrey);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: var(--primary);
    border: 1px solid var(--nevGrey);
  }
`;

export const IconPlus = styled(Plus)`
  width: 60px;
  height: 60px;
  fill: var(--secondary);
`;
