import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    font-weight: 700;
  }
`;
