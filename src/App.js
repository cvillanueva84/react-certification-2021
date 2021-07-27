import React, {useState} from 'react';
import { ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './config/theme';

import Content from './components/Content';
import Header from './components/Header';


const App = () => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light')
  
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Header themeToggler={themeToggler}/>
        <Content/>
      </ThemeProvider>
    </>
  );
}

export default App;
