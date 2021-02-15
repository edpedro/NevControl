import styled from 'styled-components';
import { LogInCircle } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;
export const StyledBurger = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 20px;
  z-index: 20;
  display: none;
  position: ${({ open }) => (open ? 'fixed' : 'none')};
  top: ${({ open }) => (open ? '30px' : 'none')};
  right: ${({ open }) => (open ? '0' : 'none')};
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 32px;
    height: 4px;
    background-color: ${({ open }) =>
      open ? 'var(--white)' : 'var(--nevBrack)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? '' : 'none')};
    flex-flow: column nowrap;
    background-color: var(--nevGree);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
  }
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
  @media (max-width: 768px) {
    margin-bottom: 20px;
    span {
      font-size: 32px;
      color: var(--white_1);
    }
    &.active {
      span {
        color: var(--white);
      }
    }
    &::after {
      background-color: var(--white);
    }
  }
`;
export const CircleIcon = styled(LogInCircle)`
  height: 28px;
  width: 28px;
  margin: 10px 18px 0;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    fill: var(--white);
  }
`;
