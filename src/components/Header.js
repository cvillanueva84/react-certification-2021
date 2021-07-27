import React, {useState} from 'react';
import { Navbar, HamburguerButton, SearchInput } from './styledTags/Header.style';
import Toggle from './Toggle';

const Header = ({themeToggler}) => {

    return(
        <>
            <Navbar>
               <HamburguerButton>!!!</HamburguerButton>
               <SearchInput placeholder="search on wizeline"/>
               <Toggle onChange={() => themeToggler()}/>
            </Navbar>
        </>
    )
}

export default Header;