import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.option === 'receita' ? '60px' : '40px')};

  h2 {
    font-size: 30px;
  }
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? `${props.width}px` : '490px')};
  height: 6px;
  padding: 25px;
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
    padding: 20px;
  }
`;
export const Label = styled.label`
  label {
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary);
  }
`;
export const GridDescription = styled.div`
  margin-top: 20px;

  width: 100%;
  max-width: 500px;

  @media (max-width: 480px) {
    max-width: 300px;
    margin-top: 4px;
  }
`;
export const GridValueDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 500px;
  margin-top: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 4px;
  }
`;

export const GridCategoryAccountCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 490px;
  margin-top: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin-bottom: 10px;
    }
  }
`;
export const Select = styled.select`
  width: ${(props) => (props.width ? `${props.width}px` : '240px')};
  padding: 12px 16px 14px 16px;
  border: 1px solid var(--nevGrey);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 300;

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

export const GridType = styled.div`
  margin-top: 16px;

  width: 100%;
  max-width: 500px;

  @media (max-width: 480px) {
    margin-top: 4px;
  }
`;
