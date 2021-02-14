import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--nevBrack);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Nunito Sans, Roboto, sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #F2F3F7;
    --secondary: #696B85;
    --nevGree: #058373;
    --white: #FFFFFF;
    --white_1: #f2f2f2;
    --nevBrack: #000;
    --nevRed: #EC1C24;
    --nevGrey: #DBDDE6;  
  }
`;
