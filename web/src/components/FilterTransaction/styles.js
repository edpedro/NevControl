import styled from 'styled-components';

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
export const Select = styled.select`
  width: 120px;
  padding: 10px 12px 6px 16px;
  border: 1px solid var(--nevGrey);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 300;

  &:focus {
    outline: none !important;
    border: 1px solid var(--nevGree);
    box-shadow: 0 0 10px var(--nevGrey);
  }
  option {
  }
  @media (max-width: 480px) {
    width: 350px;
    padding: 6px 16px 14px 16px;
  }
`;
