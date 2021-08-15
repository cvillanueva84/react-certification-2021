import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetailsView from '../../pages/VideoDetailsView';
import Layout from '../Layout';
import { createGlobalStyle } from 'styled-components';
import { useStoreContext } from '../../state/Store.provider';

const lightTheme = {
  body: '#fff',
  a: '#000',
  cardBodyHover: '#f8f7f7',
};
const darkTheme = {
  body: 'rgba(33, 33, 33, 0.98)',
  a: '#fff',
  cardBodyHover: '#353434',
};
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

.separator::before {
  content: '•';
  color:${(props) => props.theme.body};
  padding: 0.4rem;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.a};
}

a:active {
  color: red;
}

`;

function App() {
  const [store] = useStoreContext();
  const { theme } = store;
  return (
    <BrowserRouter>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/:id">
            <VideoDetailsView />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
