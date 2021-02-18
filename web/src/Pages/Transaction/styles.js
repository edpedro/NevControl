import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1068px) {
      justify-content: center;
    }
  }
  main {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1236px) {
      justify-content: center;
    }
  }
`;
export const Grid = styled.div`
  margin-top: 32px;
`;
