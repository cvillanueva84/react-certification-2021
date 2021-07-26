import React from 'react';
import styled from 'styled-components';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

export const Nav = styled.nav`
  background: ${(props) => props.theme.background_color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.theme.navbar_height};
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 0rem 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
`;

const LogoText = styled.h1`
  color: ${(props) => props.theme.text_color};
  margin-left: 0.5rem;
  font-size: 2rem;
  font-weight: 900;
  @media (max-width: 600px) {
    display: none;
  }
`;

export function IconLogo() {
  return (
    <LogoContainer>
      <AiFillYoutube size="3.5rem" color="red" />
      <LogoText>WizeTube</LogoText>
    </LogoContainer>
  );
}

const FormSearch = styled.form`
  display: flex;
  display: row;
`;

const InputSearch = styled.input`
  padding: 0rem 0.5rem;
  border: 1px solid ${(props) => props.theme.icon_color};
  margin-left: 1rem;
  width: 350px;

  @media (max-width: 737px) {
    width: 200px;
  }
`;

const SearchButton = styled.button`
  color: ${(props) => props.theme.icon_color};
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.5rem 0.75rem;
  margin-right: 1rem;
`;

export function SearchBar() {
  return (
    <FormSearch>
      <InputSearch type="text" placeholder="Search" />
      <SearchButton>
        <FaSearch size="1rem" />
      </SearchButton>
    </FormSearch>
  );
}

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 3.5rem;
  height: auto;
`;
