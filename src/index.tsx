import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    contact: Model,
  },
  seeds(server) {
    server.db.loadData({
      contacts: [
        {
          id: 1,
          name: 'Hefanys Cavalcante',
          email: 'hefanys@all.com',
          phone: '(88) 98888-8888',
        },
        {
          id: 2,
          name: 'Diego Gaspar',
          email: 'diego@all.com',
          phone: '(88) 98888-8888',
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/contacts', () => this.schema.all('contact'));

    this.post('/contacts', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('contact', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
