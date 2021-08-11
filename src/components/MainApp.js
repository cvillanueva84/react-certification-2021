import React, { useEffect, useReducer } from 'react'
import { AppRouter } from '../routers/AppRouter'
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
    search: 'alonsocode',
    videoData: {},
    user: '',
    logged: false,
};

// const init = () => {
//   return JSON.parse(localStorage.getItem('user')) || {
//     mode: 'light',
//     search: 'wizeline',
//     videoData: {},
//     user: '',
//     logged: false,
//   }
// }


export const MainApp = () => {

    const [myStateReducer, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(myStateReducer.user));
    }, [myStateReducer.user]);

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
