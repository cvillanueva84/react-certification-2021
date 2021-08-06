import React from 'react';
import ReactDOM from 'react-dom';

//import App from './components/App';
import { MainApp } from './components/MainApp';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);
