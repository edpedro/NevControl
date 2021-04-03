import styled from 'styled-components';
import { EditCircle, DeleteBack2 } from '../../styles/Icons';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Tbody = styled.tbody`
  tr,
  td {
    text-align: left;
    padding-left: 40px;
    padding-right: 6px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--nevGrey);
    font-weight: 700;
    font-size: 15px;

    p {
      text-align: center;
    }

    &:nth-child(2) {
      font-weight: 500;
    }
    &:nth-child(3) {
      font-weight: 600;
    }
    &:nth-child(4) {
      color: var(--nevGree);
    }

    &.active {
      /* background: var(--nevRed); */
      td {
        &:nth-child(4) {
          color: var(--nevRed);
        }
      }
    }
  }
  @media (max-width: 852px) {
    tr,
    td {
      padding-left: 60px;
      padding-right: 6px;
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }
  @media (max-width: 751px) {
    tr,
    td {
      padding-left: 30px;
      padding-right: 6px;
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }
  @media (max-width: 606px) {
    tr,
    td {
      padding: 0;
      font-size: 10px;
    }
  }
`;
export const IconEdit = styled(EditCircle)`
  width: 18px;
  height: 18px;
  fill: var(--nevOrange);
  cursor: pointer;
`;
export const IconDelet = styled(DeleteBack2)`
  width: 18px;
  height: 18px;
  fill: var(--nevRed);
  cursor: pointer;
`;
