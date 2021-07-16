import { createGlobalStyle } from 'styled-components';

const theme = localStorage.getItem('theme');

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --background: ${theme === 'dark' ? '#555' : '#f0f2f5'};

    --red: #E52e54;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --dark-orange: #FF8C00;
    --orange: 	#FFA100;

    --text-title: ${theme === 'dark' ? '#fff' : '#363f5f'};
    --text-body: ${theme === 'dark' ? '#fff' : '#969cb3'};

    --shape: ${theme === 'dark' ? '#121212' : '#fff'}
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
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
    background-color: var(--background);
    -webkit-font-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-overlay{
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .modal-content{
    width: 100%;
    max-width: 576px;

    background-color: var(--background);

    padding: 3rem;

    position: relative;

    border-radius: 0.25rem;
  }

  .close-modal-btn{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8)
    }
  }

`;
