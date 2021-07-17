import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 1',
          amount: 420,
          type: 'deposit',
          category: 'Car',
          createdAt: new Date(),
        },
      ];
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return data;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
