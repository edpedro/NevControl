import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;

  padding: 10px 0px;

  p {
    margin-right: 10px;
    color: var(--secondary);
  }
  span {
    font-weight: 700;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px 0px;

  @media (max-width: 606px) {
    flex-direction: column;
  }
`;
export const Balance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
  width: 260px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid var(--nevGrey);

  p {
    margin-right: 10px;
  }
  span {
    font-weight: 700;
  }
  @media (max-width: 606px) {
    margin-bottom: 10px;
  }
`;
export const Vencimen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid var(--nevGrey);

  p {
    margin-right: 10px;
  }
  span {
    font-weight: 700;
    color: var(--nevRed);
  }
`;
export const Transactions = styled.div`
  width: 100%;
  max-width: 600px;

  margin-top: 30px;
  overflow: auto;
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
export const Select = styled.select`
  width: 110px;
  padding: 8px 10px 4px 8px;
  border: 1px solid var(--nevGrey);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 300;
  margin: 10px 10px;

  &:focus {
    outline: none !important;
    border: 1px solid var(--nevGree);
    box-shadow: 0 0 10px var(--nevGrey);
  }
  option {
  }
  @media (max-width: 480px) {
    width: 350px;
    padding: 6px 16px 14px 16px;
  }
`;
