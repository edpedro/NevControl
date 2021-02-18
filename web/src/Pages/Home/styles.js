import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 20px 0;
`;

export const GridCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1231px) {
    justify-content: center;
  }
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

  @media (max-width: 1271px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 744px) {
    flex-direction: column;
  }
`;
