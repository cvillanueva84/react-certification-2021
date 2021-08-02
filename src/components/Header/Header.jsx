import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Container,
  LeftHeader,
  RightHeader,
  SearchDiv,
  DivSearchIcon,
  DivInput,
  SwitchBtn,
  IconButton,
  LabelIconButton,
  Input,
  Thumb,
  TouchRipple,
  TrackSwitch,
  ButtonAccount,
  DivAvatar,
} from './Header.styled';

function Header({ children, enterPressed }) {
  return (
    <Container>
      <LeftHeader>
        <MenuIcon />
        <SearchDiv type="submit" onSubmit={enterPressed}>
          <DivInput>
            <DivSearchIcon>
              <SearchIcon />
            </DivSearchIcon>
            {children}
          </DivInput>
        </SearchDiv>
      </LeftHeader>
      <RightHeader>
        <div>
          <SwitchBtn>
            <IconButton>
              <LabelIconButton>
                <Input name="search" type="checkbox" />
                <Thumb />
              </LabelIconButton>
              <TouchRipple />
            </IconButton>
            <TrackSwitch />
          </SwitchBtn>
          <span>Dark mode</span>
        </div>
        <ButtonAccount>
          <DivAvatar>
            <AccountCircleIcon style={{ fontSize: 40 }} />
          </DivAvatar>
        </ButtonAccount>
      </RightHeader>
    </Container>
  );
}

export default Header;
