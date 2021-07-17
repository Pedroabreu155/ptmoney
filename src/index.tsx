import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Criação de app com React Native',
          type: 'deposit',
          category: 'Freela',
          amount: 5500,
          createdAt: new Date('2021-01-22 15:30:00'),
        },
        {
          id: 2,
          title: 'Churrasco com a família',
          type: 'withdraw',
          category: 'Comida',
          amount: 200,
          createdAt: new Date('2021-03-18 10:30:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
