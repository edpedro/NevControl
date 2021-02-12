import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 276px;
  height: 135px;
  border-radius: 10px;
  margin-left: 10px;
  background: var(--white);
  cursor: pointer;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 20px;
  > img {
    height: 24px;
    width: 24px;
  }
  > h3 {
    font-size: 16px;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Invoice = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 20px;

  > h4 {
    color: var(--secondary);
  }
  > p {
    font-weight: 700;
    font-size: 15px;

    > span {
      color: var(--nevBrack);
    }
  }
`;
export const Limit = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 20px;

  > h4 {
    color: var(--secondary);
  }
  > p {
    font-weight: 700;
    font-size: 15px;

    > span {
      color: var(--nevBrack);
    }
  }
`;
