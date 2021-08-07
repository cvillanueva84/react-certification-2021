import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import NotFound from '../../pages/NotFound';
import styled from 'styled-components';
import { useVideos } from '../../utils/hooks/useVideos';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import HomeView from '../../pages/HomeView';
import Video from '../../pages/Video';

const Layout = styled.div`
  display: flex;
  background: hsl(0, 0%, 95%);
`;
const Main = styled.div`
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  background-color: white;
  /* min-height: 85.5vh; */
  
  @media (min-width: 1068px) {
    border-radius: 1rem;
    margin: 4rem 4rem 4rem 0;
  }
`;

function App() {

  const [{ isLoading, isError, data }, changeUrl] = useVideos();

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <SideBar />
          <Main>
            <Header changeUrl={changeUrl} />
            <Switch>
              <Route exact path="/">
                <HomeView videos={data} isLoading={isLoading} isError={isError} changeUrl={changeUrl}/>
              </Route>
              <Route exact path="/watch/:id" render={(props) => <Video videos={data} isLoading={isLoading} isError={isError} changeUrl={changeUrl} {...props}/>} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Main>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
