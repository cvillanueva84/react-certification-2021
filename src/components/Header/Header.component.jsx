import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';

const Container = styled.div`
  background-color: ${(props) => props.theme.header};
  color: ${(props) => props.theme.text};
  display: flex;
  position: fixed;
  top: 0;
  height: 9vh;
  max-height: 55px;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px ${(props) => props.theme.secondary};
`;

const Logo = styled.h1`
  font-size: 1.75rem;
  user-select: none;
  cursor: pointer;
  span {
    padding: 0px 5px;
    background-color: red;
    color: white;
    border-radius: 7.5px;
    position: relative;
    &::after {
      content: 'TV';
      color: #696969;
      position: absolute;
      font-size: 0.65rem;
      top: 0;
      right: -1rem;
    }
  }
`;

const SearchBar = styled.div`
  background-color: ${(props) => props.theme.accent};
  height: 5vh;
  max-height: 30px;
  width: 45%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  &:hover {
    filter: brightness(${(props) => props.theme.filter});
  }
  svg {
    cursor: pointer;
    height: 90%;
    margin: 0px 10px;
    fill: ${(props) => (props.searchTerm ? props.theme.text : '#696969')};
  }
  input {
    border: none;
    background-color: inherit;
    font-size: inherit;
    height: 100%;
    width: 90%;
    color: ${(props) => props.theme.text};
    &::placeholder {
      color: #696969;
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
`;

const ProfilePicture = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${(props) => props.theme.text};
  border: solid 2px ${(props) => props.theme.text};
  overflow: hidden;
  &::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.header};
  }
  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 15px;
    border-radius: 50px;
    left: 50%;
    transform: translate(-50%, 175%);
    background-color: ${(props) => props.theme.header};
  }
`;

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchBar searchTerm={searchTerm}>
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchBar>
  );
}

function Header({ themeToggler }) {
  return (
    <Container>
      <Logo>
        Wize<span>line</span>
      </Logo>
      <SearchInput />
      <Toggle action={themeToggler} />
      <ProfilePicture />
    </Container>
  );
}

export default Header;
