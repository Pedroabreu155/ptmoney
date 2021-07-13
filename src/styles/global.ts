import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --background: #f0f2f5;

    --red: #E52e54;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body{
    background-color: var(---background);
    -webkit-font-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
