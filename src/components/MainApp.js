import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { GlobalContext } from './Context'
import { ThemeProvider, createGlobalStyle } from 'styled-components';


export const MainApp = () => {


    const [search, setSearch] = useState({});
    const [mode, setMode] = useState('light');


    const commontheme = {
        fontFam: 'Arial',
      };
      
      const lightTheme = {
        ...commontheme,
        bg: '#fff',
        text: '#121212',
      };
      
      const darkTheme = {
        ...commontheme,
        bg: '#242526',
        text: '#fff',
      };
      
      const GlobalStyles = createGlobalStyle`
        body {
          font-family: ${(props) => props.theme.fontFam};
          color: ${(props) => props.theme.text};
          background-color: ${(props) => props.theme.bg};
      
          transition: 0.8s;
        }
      `;
      


    return (
        <GlobalContext.Provider value={{
            search,
            setSearch,
            mode,
            setMode
        }}>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <AppRouter/>
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}
