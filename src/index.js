import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ThemeProvider from './providers/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
