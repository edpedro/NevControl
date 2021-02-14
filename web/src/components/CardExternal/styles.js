import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 440px;
  height: 196px;
  margin: 0 10px;
  padding: 10px 40px;
  border-radius: 10px;
  background: var(--white);
`;
export const Header = styled.div`
  padding: 10px 10px;
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
export const GrindItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  list-style: none;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--nevGrey);

  span {
    font-weight: 700;
    color: ${(props) => (props.red ? 'var(--nevRed)' : 'var(--nevGree)')};
  }
  p {
    font-weight: 700;
  }
`;
