import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { GlobalContext } from './Context'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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

//================

// const initialState = [{
//     mode: 'light',
//     search: 'wizeline',
//     videoId: '',
//     videoData: {}
// }];


export const MainApp = () => {

    const [mode, setMode] = useState('light');      
    const [search, setSearch] = useState('wizeline');
    const [videoId, setVideoId] = useState('');
    const [videoData, setVideoData] = useState({});


    return (
        <GlobalContext.Provider value={{
            mode, setMode,
            search, setSearch,
            videoId, setVideoId,
            videoData, setVideoData,
        }}>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <AppRouter/>
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}
