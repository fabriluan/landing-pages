import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-weight: 400;
    }
    
    html,body,#root{
      color: ${(props) => props.theme.white};
      font-family: 'Red Hat Display', sans-serif;
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme.background};
  }

  a{
      text-decoration: none;
      cursor: pointer;
  }

  .text_title{
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    font-family: 'Rubik', sans-serif !important;
    font-size: 33px;
    font-weight: 300;

    b{
      font-family: 'Rubik', sans-serif !important;
      font-size: 35px !important;
      font-weight: 800 !important;
    }
  }

`;

export default GlobalStyles;
