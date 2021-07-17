import React from 'react';

import { Container } from './styles';

import incomesImg from '../../assets/images/income.svg';
import outcomesImg from '../../assets/images/outcome.svg';
import totalImg from '../../assets/images/total.svg';

import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomesImg} alt="Entradas" />
        </header>
        <strong>R$ 2000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomesImg} alt="Saídas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>

      <div className="totalCard">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Toatal" />
        </header>
        <strong>R$ 1500,00</strong>
      </div>
    </Container>
  );
}
