import { createGlobalStyle } from 'styled-components';


const commontheme = { 
    fontFam: 'Arial' 
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

    html {
    font-size: 1.125rem;
    line-height: 1.2;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export {
    GlobalStyles,
    lightTheme,
    darkTheme
}