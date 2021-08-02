import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput.component';
import styled, {css} from 'styled-components';
import { Link } from "react-router-dom"; 

// ICONS
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { IoClose, IoSearchCircleSharp } from 'react-icons/io5';
import ToggleButton from '../ToggleButton/ToggleButton.component';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.02), 0 0.8px 5.3px rgba(0, 0, 0, 0.028),
    0 1.5px 10px rgba(0, 0, 0, 0.035), 0 2.7px 17.9px rgba(0, 0, 0, 0.042),
    0 5px 33.4px rgba(0, 0, 0, 0.05), 0 12px 80px rgba(0, 0, 0, 0.07);
  border-radius: 1rem 1rem 0 0;

  @media (max-width: 1068px) {
    border-radius: 0;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
`;

const logo_img = require('../../img/youtube-logo.png');

const Logo = styled.div`
  background-image: url(${logo_img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1.5rem;
  width: 8rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
  ${props => props.isSearch && css`
    @media (max-width: 600px) {
      display: none;
    }
  `};
`;

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${props => props.isSearch && css`
    width: 100%;
    max-width: 30rem;
  `};
`;

function Header(props) {

  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState(null);

  const toggleSearch = () => setIsSearch(!isSearch);
  const handleChange = (event) => setSearchText(event.target.value);
  const search = (event) => {
    event.preventDefault();
    props.setQuery(searchText)
  };

  return (
    <Container>
      <ToggleButton icon={HiMenuAlt1} />
      <Link to="/">
        <Logo isSearch={isSearch} data-testid="logo" />
      </Link>
      <SearchContainer onSubmit={search} isSearch={isSearch}>
        {isSearch && <SearchInput handleChange={handleChange}/>}
        {isSearch && <ToggleButton onClick={search} icon={IoSearchCircleSharp}/>}
        <ToggleButton onClick={toggleSearch} icon={isSearch ? IoClose : BiSearchAlt} />
      </SearchContainer>
    </Container>
  );
}

export default Header;
