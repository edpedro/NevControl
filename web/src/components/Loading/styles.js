import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 220px;

  span {
    background: var(--nevGree);
    width: 15px;
    height: 50px;
    display: inline-block;
    margin: 0 2px;

    &:nth-child(1) {
      animation: grow 0.5s -0.45s ease-in-out alternate infinite;
    }
    &:nth-child(2) {
      animation: grow 0.5s -0.3s ease-in-out alternate infinite;
    }
    &:nth-child(3) {
      animation: grow 0.5s -0.15s ease-in-out alternate infinite;
    }
    &:nth-child(4) {
      animation: grow 0.5s 0s ease-in-out alternate infinite;
    }
  }

  @keyframes grow {
    to {
      transform: scaleY(2);
    }
  }
`;
