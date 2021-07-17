import React from 'react';

import { Container } from './styles';

import incomesImg from '../../assets/images/income.svg';
import outcomesImg from '../../assets/images/outcome.svg';
import totalImg from '../../assets/images/total.svg';

import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'deposit') {
        accumulator.deposits += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraws += transaction.amount;
        accumulator.total -= transaction.amount;
      }

      return accumulator;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomesImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomesImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="totalCard">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Toatal" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
