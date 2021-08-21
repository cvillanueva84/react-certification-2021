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
`;

export {
    GlobalStyles,
    lightTheme,
    darkTheme
}