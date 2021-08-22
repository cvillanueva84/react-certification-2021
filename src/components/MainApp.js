import React, { useEffect, useReducer } from 'react'
import { AppRouter } from '../routers/AppRouter'
import { GlobalContext } from './Context'
import { globalReducer } from './globalReducer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../style/MainAppStyled';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    mode: 'light',
    search: 'wizeline',
    videoData: {},
    videoDataFav: {},
    user: '',
    logged: false,
    favorites: [],
  }
}

export const MainApp = () => {

  const [myStateReducer, dispatch] = useReducer(globalReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(myStateReducer));
  }, [myStateReducer]);

  return (
    <GlobalContext.Provider value={{
      myStateReducer, dispatch,
    }}>
      <ThemeProvider theme={myStateReducer.mode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}
