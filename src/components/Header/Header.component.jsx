import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  padding: 0 24px;
  background-color: #1C5476;
  color: #fff;
  position: relative;
  align-items: center;
  min-height: 64px;
  justify-content: space-between;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  margin-bottom: 2em;
`;

const SearchBar = styled.div`
  height: 38px;
  width: 25%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  margin: 0;

  @media (max-width: 769px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  height: 100%;
  display: flex;
  padding: 0 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const SearchInput = styled.input`
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 8px 8px 8px calc(1em + 32px);
  background: none;
  border: 0;
  box-sizing: content-box;
  width: 40ch;

  ::placeholder {
    color: white;
    opacity: 0.3;
    font-size: 1.2em;
  }
`;

const SvgIcon = styled.svg`
  fill: currentColor;
  width: 0.9em;
  height: 0.9em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

const AccountControls = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-right: 10px;
  }
`;

const Switch = styled.div`
  font-weight: lighter;
`;

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 29px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

/*
Ported from W3 example
https://www.w3schools.com/howto/howto_css_switch.asp
 */
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  margin-right: 5px;

  input:checked + & {
    background-color: #2196F3;
  }

  &:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;

    input:focus + & {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + & {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;

function MainNav() {
  return (
    <Header>
      <a>
        <svg xmlns='http://www.w3.org/2000/svg' height='32px' width='32px' viewBox='0 0 24 24' fill='#fff'>
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
        </svg>
      </a>

      <SearchBar>
        <SearchIcon>
          <SvgIcon focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
            <path
              d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
          </SvgIcon>
        </SearchIcon>
        <SearchInput placeholder='Search...' type='text' />
      </SearchBar>

      <AccountControls>
        <Switch>
          <SwitchWrapper>
            <input type='checkbox' />
            <Slider />
          </SwitchWrapper>
          Darkmode
        </Switch>
        <a href='/'>
          <svg xmlns='http://www.w3.org/2000/svg' height='40px' width='40px' viewBox='0 0 24 24' fill='#fff'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path
              d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z' />
          </svg>
        </a>
      </AccountControls>
    </Header>
  );
}

export default MainNav;