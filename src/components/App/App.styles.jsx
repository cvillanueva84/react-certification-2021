import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  div{
    color: ${(props) => props.theme.a};
  }
  .form-group {  background-color: ${(props) => props.theme.body};}
  #cardBody{
    box-shadow: ${(props) => props.theme.a} 1px 1px 0, ${(props) =>
  props.theme.a} 2px 2px 0, ${(props) => props.theme.a} 3px 3px 0, ${(props) =>
  props.theme.a} 4px 4px 0,
      ${(props) => props.theme.a} 5px 5px 0, ${(props) => props.theme.a} 6px 6px 0, ${(
  props
) => props.theme.a} 7px 7px 0, ${(props) => props.theme.a} 8px 8px 0;
    :hover {
      background-color: ${(props) => props.theme.cardBodyHover};
      box-shadow: red 1px 1px 0, red 2px 2px 0, red 3px 3px 0, red 4px 4px 0, red 5px 5px 0,
        red 6px 6px 0, red 7px 7px 0, red 8px 8px 0;
    }
  }
  #relatedVideo{
    :hover {
      background-color: ${(props) => props.theme.cardBodyHover};
    }
  }
  #menu{
    :hover {
      background-color: ${(props) => props.theme.a};
      border-radius: 50%;
    }
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.a};
  }
  .login {
    color: ${(props) => props.theme.a};
  }
  a:active {
    color: red;
  }
  .nav-menu {
  background-color: ${(props) => props.theme.body};
  width: 200px;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
}

.nav-menu.active {
  left: 0;
  transition: 350ms;
}

`;

export default GlobalStyle;
