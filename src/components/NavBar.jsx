import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';

const StyledInputBase = styled(InputBase)`
  background-color: rgb(255, 255, 255, 0.15);
  border-radius: 4px;
  margin-right: 5px;

  > input {
    color: white;
    padding-left: 5px;
  }
`;

const NavBar = ({ className, handleSearchField, handleSearchButton }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}
          >
            <div style={{display: 'flex', alignItems:'center'}}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <StyledInputBase placeholder="Search" onChange={handleSearchField} />
              <Button color="secondary" variant="contained" onClick={handleSearchButton}>
                Search
              </Button>
            </div>

            <div style={{display: 'flex', alignItems:'center'}}>
              <Switch name="viewMode" />
              <AccountCircleIcon fontSize="large" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

const LightNavBar = styled(NavBar)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #1c5476;
  padding: 10px;

  @media screen and (min-width: 430px) {
    flex-direction: row;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }

  > div {
    display: flex;
    justify-content: space-around;
  }
`;

const DarkNavBar = styled(NavBar)`
  display: flex;
  justify-content: space-between;
  background-color: #556cd6;
  padding: 10;

  > div {
    display: flex;
    justify-content: space-around;
  }
`;

export default { DarkNavBar, LightNavBar };
