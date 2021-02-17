import styled from 'styled-components';
import { ArrowUpCircleFill } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--nevGree);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  width: 100%;
  max-width: 526px;
  height: 228px;
  margin: 0px 10px;

  @media (max-width: 1092px) {
    margin-bottom: 10px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 14px 30px;

  > h3 {
    color: var(--white);
    font-size: 16px;
  }
`;
export const UpArrowCircle = styled(ArrowUpCircleFill)`
  width: 24px;
  height: 24px;
  fill: var(--white);
`;
export const Main = styled.div`
  > h2,
  p,
  h4 {
    display: flex;
    justify-content: center;
  }
  > h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--white);
  }
  > p {
    align-items: center;

    color: var(--white);
    font-size: 14px;
    margin-top: 18px;

    > span {
      font-size: 26px;
      font-weight: 700;
      margin: 0 5px 6px;
      color: var(--white);
    }
  }

  > h4 {
    margin-top: 16px;
    color: var(--white);
  }
`;
