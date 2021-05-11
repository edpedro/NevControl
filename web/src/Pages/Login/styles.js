import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  margin-top: 120px;
  width: 100%;
  max-width: 500px;

  h2 {
    text-align: center;
    font-size: 32px;
  }

  form {
    margin-top: 10px;
  }

  div {
    p {
      font-weight: 700;
    }
    @media (max-width: 480px) {
      p {
        font-size: 13px;
      }
    }
  }
  div:nth-child(2) {
    margin-top: 40px;
  }
  div:nth-child(3) {
    margin-bottom: 10px;
  }
  div:nth-child(4) {
    margin-bottom: 40px;
  }
  @media (max-width: 480px) {
    max-width: 350px;
  }
`;

export const Label = styled.label`
  label {
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary);
  }
`;
export const Input = styled.input`
  width: 490px;
  height: 6px;
  padding: 32px;
  margin-top: 4px;
  border: 1px solid var(--nevGrey);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 300;

  &:focus {
    outline: none !important;
    border: 1px solid var(--nevGree);
    box-shadow: 0 0 10px var(--nevGrey);
  }
  @media (max-width: 480px) {
    width: 350px;
  }
`;
