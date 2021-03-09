import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 890px;
  height: 469px;
  margin-top: 30px;
  padding: 10px 40px;
  border-radius: 10px;
  background: var(--white);
`;
export const Header = styled.div`
  font-size: 14px;

  h2 {
    text-align: center;
  }
`;
export const Grid = styled.div`
  padding: 20px 0px;

  overflow: auto;

  h1 {
    text-align: center;
  }

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
export const GrindItem = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  list-style: none;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--nevGrey);

  span {
    font-weight: 700;
    color: var(--nevGree);
    /* color: ${(props) => (props.red ? 'var(--nevRed)' : 'var(--nevGree)')}; */
  }
  &.active {
    span {
      color: var(--nevRed);
    }
  }
  p {
    font-weight: 700;
  }
`;
