import styled from 'styled-components';
import { EditCircle, DeleteBack2 } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 890px;
  height: 469px;
  margin-top: 30px;
  padding: 10px 40px;
  border-radius: 10px;
  background: var(--white);
`;
export const Header = styled.div`
  font-size: 14px;

  h2 {
    text-align: center;
  }
`;
export const Grid = styled.div`
  padding: 20px 0px;

  overflow: auto;

  h1 {
    text-align: center;
  }

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
  ::-webkit-scrollbar-track-piece {
    height: 4px;
  }
`;
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
