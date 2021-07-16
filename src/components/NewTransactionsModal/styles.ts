import styled from 'styled-components';
import { darken, transparentize } from 'polished';

type TransactionTypeButtonProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#E52e54',
};

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 25px;
    height: 25px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
