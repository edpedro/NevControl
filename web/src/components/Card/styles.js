import styled from 'styled-components';
import { EditCircle, DeleteBack2 } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 276px;
  height: 135px;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
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
    font-weight: 500;
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
    font-weight: 300;
  }
  > p {
    font-weight: 600;
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
    font-weight: 300;
  }
  > p {
    font-weight: 600;
    font-size: 15px;

    > span {
      color: var(--nevBrack);
    }
  }
`;
export const IconGrid = styled.div`
  display: flex;
  align-items: center;
`;
export const IconEdit = styled(EditCircle)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  fill: var(--nevOrange);
  cursor: pointer;
`;
export const IconDelet = styled(DeleteBack2)`
  width: 18px;
  height: 18px;
  fill: var(--nevRed);
  cursor: pointer;
`;
