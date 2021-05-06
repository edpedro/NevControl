import styled from 'styled-components';
import { Close } from '../../styles/Icons';

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
export const IconClose = styled(Close)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 30px;
  margin: 0;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;
