import styled from 'styled-components';

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
