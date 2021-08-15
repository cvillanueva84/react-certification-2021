import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './state/Store.provider';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
