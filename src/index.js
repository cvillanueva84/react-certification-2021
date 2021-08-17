import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

const Context = createContext('light');

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
