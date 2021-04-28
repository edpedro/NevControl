import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.option === 'receita' ? '10px' : '10px')};

  h2 {
    font-size: 30px;
  }
`;
export const Body = styled.div`
  margin-top: 10px;
  text-align: center;
  padding: 4px 0px;
`;
