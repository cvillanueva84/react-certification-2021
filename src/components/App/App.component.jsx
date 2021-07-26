import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../../common/breakpoint';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
// import Fortune from '../Fortune';
import Hamburger from '../Hamburger';
import User from '../User';
import SearchIcon from '../SearchIcon';
import Layout from '../Layout';
import { random } from '../../utils/fns';

const Header = styled.nav`
  background: #de382a;
  color: #fff;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  min-height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  .navbar {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    .spacer {
      flex: 1;
      @media only screen and (${breakpoint.device.xs}) {
        display: none;
      }
      @media only screen and (${breakpoint.device.sm}) {
        display: flex;
        flex: 1;
      }
      @media only screen and (${breakpoint.device.lg}) {
        display: flex;
        flex: 1;
      }
    }
  }
  input {
    margin-left: 1em;
    border-radius: 5px;
    border: none;
    padding: 8px 15px;
    cursor: text;
    display: inline-flex;
    position: relative;
    font-size: 1rem;
    box-sizing: border-box;
    align-items: center;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
    background: #bf2e21;
    color: white;
    padding-left: 40px;
    @media only screen and (${breakpoint.device.xs}) {
      width: 100%;
    }
  }
  input:focus {
    outline: 1px solid #fff;
  }
  .navChild {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media only screen and (${breakpoint.device.xs}) {
      width: 100%;
    }
    @media only screen and (${breakpoint.device.sm}) {
      width: auto;
    }
    @media only screen and (${breakpoint.device.lg}) {
      width: auto;
    }
  }

  .navChild-right {
    @media only screen and (${breakpoint.device.xs}) {
      display: none;
    }
    @media only screen and (${breakpoint.device.sm}) {
      display: flex;
    }
    @media only screen and (${breakpoint.device.lg}) {
      display: flex;
    }
  }
`;

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Header>
            <div className="navbar">
              <Hamburger />
              <div className="navChild">
                <SearchIcon />
                <input placeholder="Search..." type="text" aria-label="search" />
              </div>
              <div className="spacer" />
              <div className="navChild navChild-right">
                {/* <span id="switch" type="text">
                  Switch
                </span> */}
                <span>Dark Mode</span>
                <User />
              </div>
            </div>
          </Header>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
