import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 400px;
  /* width: 440px; */
  height: 200px;
  margin: 0px 10px;
  padding: 10px 40px;
  border-radius: 10px;
  background: var(--white);
`;
export const Header = styled.div`
  padding: 10px 10px;

  h4 {
    font-size: 15px;
    text-align: center;
  }
`;
export const Grid = styled.div`
  padding: 10px 0;

  overflow: auto;

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
    padding-left: 6px;

    border-bottom: 1px solid var(--nevGrey);
    font-weight: 700;
    font-size: 14px;

    &:nth-child(2) {
      font-weight: 500;
    }
    &:nth-child(3) {
      font-weight: 700;
    }
    &:nth-child(4) {
      color: var(--nevGree);
    }

    &.active {
      td {
        &:nth-child(3) {
          color: var(--nevRed);
        }
      }
    }
  }
  @media (max-width: 670px) {
    tr,
    td {
      padding: 6px;
    }
  }
`;
