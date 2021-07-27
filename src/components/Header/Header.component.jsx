import React from 'react';
import { HeaderBody, HeaderContainer, Hamburguer, Search, ToggleBox, Profile } from './Header.styles';


function Header(){
    return (
        <HeaderContainer>
            <HeaderBody>
                <Hamburguer />
                <Search
                    type="text"
                    placeholder="Search"
                />
            </HeaderBody>
            <HeaderBody>
                Dark Mode
                <ToggleBox
                    type="checkbox"
                />
                <Profile />
            </HeaderBody>
        </HeaderContainer>
    );
}

export default Header;