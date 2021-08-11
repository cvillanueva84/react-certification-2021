import React, { useReducer } from 'react'
import { AppRouter } from './AppRouter'
import { GlobalContext } from './Context'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { globalReducer } from './globalReducer';

const commontheme = { fontFam: 'Arial'};
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


const initialState = {
    mode: 'light',
    search: 'wizeline',
    videoData: {},
    user: {},
    logged: true
};


export const MainApp = () => {

    const [myStateReducer, dispatch] = useReducer(globalReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            myStateReducer, dispatch,
        }}>
            <ThemeProvider theme={myStateReducer.mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <AppRouter/>
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}
