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

  margin: 20px 0;

  @media (max-width: 571px) {
    justify-content: center;
    align-items: center;
  }
`;
export const Grid = styled.div`
  display: flex;

  @media (max-width: 1275px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
