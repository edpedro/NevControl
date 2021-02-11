import styled from 'styled-components';
import { LogInCircle } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;
export const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    width: 50px;
    height: 50px;
  }
  > h1 {
    font-size: 18px;
    font-weight: 800;
    margin-top: 16px;
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  padding: 0 16px;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  > span {
    color: var(--secondary);
  }

  &.active {
    span {
      color: var(--nevBrack);
    }
  }
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: var(--nevBrack);
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;
export const CircleIcon = styled(LogInCircle)`
  height: 28px;
  width: 28px;
  margin: 10px 18px 0;
  cursor: pointer;
`;
