import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import globalStore from 'store/globalStore';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
