import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 790px;
  height: 469px;
  margin: 30px 10px;
  padding: 10px 40px;
  border-radius: 10px;
  background: var(--white);
  overflow: auto;
`;
export const Header = styled.div`
  font-size: 14px;

  > h2 {
    text-align: center;
  }
`;
export const Grid = styled.div`
  padding: 20px 0px;

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    list-style: none;

    > li {
      > span {
        font-weight: 700;
      }
      &:nth-child(4) {
        > li {
          font-size: 10px;
        }
        > span {
          font-weight: 700;
          color: ${(props) => (props.red ? 'var(--nevRed)' : 'var(--nevGree)')};
        }
      }
    }
  }
`;
