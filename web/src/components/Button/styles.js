import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  button {
    width: 490px;
    height: 57px;
    background: var(--nevGree);
    border-radius: 12px;
    font-size: 30px;
    font-weight: 700;
    color: var(--white);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: var(--nevGree_1);
    }

    @media (max-width: 480px) {
      width: 350px;
      height: 45px;
      font-size: 25px;
    }
  }
`;
