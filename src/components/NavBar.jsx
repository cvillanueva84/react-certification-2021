import React from 'react';
import styled from 'styled-components';

const NavBar = ({ className, handleSearchField, handleSearchButton }) => {
  return (
    <>
      <div className={className}>
        <div>
          <div style={{marginRight:7, color:'white'}}>Home</div>
          <input type="text" placeholder="Search" onChange={handleSearchField} />
          <button type="button" onClick={handleSearchButton} >Search</button>
        </div>

        <div >
          <div style={{marginRight:7, color:'white'}}>
            <input id="modoVista" type="checkbox" name="modoVista" />
            <label htmlFor="modoVista">DarkMode</label>
          </div>
          <div style={{color:'white'}}>Login</div>
        </div>
      </div>
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

export default {DarkNavBar, LightNavBar};
