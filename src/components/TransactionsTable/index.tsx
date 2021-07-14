import React from 'react';

import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$ 900,00</td>
            <td>Trabalho</td>
            <td>31/06/2021</td>
          </tr>
          <tr>
            <td>Mac Donald's</td>
            <td className="withdraw">- R$ 50,00</td>
            <td>Comida</td>
            <td>07/06/2021</td>
          </tr>
          <tr>
            <td>Freela</td>
            <td className="deposit">R$ 400,00</td>
            <td>Trabalho</td>
            <td>22/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
