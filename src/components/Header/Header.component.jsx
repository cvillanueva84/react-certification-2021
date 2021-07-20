import React from 'react';
import avatar from '../../img/avatarWhite.png';
import {
  NavBar,
  SearchContainer,
  SearchField,
  Icon,
  BarsIcon,
  HeaderTitle,
  CheckLabel,
  Check,
  SwitchWrapper,
  Span,
  Container,
  UserAvatar,
  ImgContainer,
} from './Header.styled';

function Header() {
  return (
    <NavBar>
      <BarsIcon className="fas fa-bars" />
      <HeaderTitle>WizeTube</HeaderTitle>
      <SearchContainer>
        <Icon className="fas fa-search" />
        <SearchField
          type="text"
          placeholder="Search.."
          placeolderTextColor="white"
        ></SearchField>
      </SearchContainer>
      <SwitchWrapper>
        <Check id="checkbox" type="checkbox" />
        <CheckLabel htmlFor="checkbox" />
      </SwitchWrapper>
      <Container>
        <Span>Dark mode</Span>
      </Container>
      <ImgContainer>
        <UserAvatar src={avatar} />
      </ImgContainer>
    </NavBar>
  );
}

export default Header;
