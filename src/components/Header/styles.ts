import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--dark-orange);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button.toggleTheme {
    border: none;
    padding: 0.3rem 2rem;
    font-size: 1rem;
    color: #fff;
    border-radius: 0.25rem;
    background-color: var(--orange);
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button.transactionsButton {
    font-size: 1rem;
    color: #fff;
    background-color: var(--orange);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
