import React, { useState, useEffect } from 'react';
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
  InputSearch,
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

import useYoutubeApi from '../helpers/useYoutubeApi';

function Header() {
  const { data, loading, error, fetchSearch } = useYoutubeApi();
  const [value, setValue] = useState('hello');

  useEffect(() => {
    //fetchSearch(value);
    console.log(data);
    // eslint-disable-next-line
  }, []);

  const enterPressed = (event) => {
    console.log(value);
    //fetchSearch(value);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <LeftHeader>
        <MenuIcon />
        <SearchDiv type="submit" onSubmit={enterPressed}>
          <DivInput>
            <DivSearchIcon>
              <SearchIcon />
            </DivSearchIcon>
            <InputSearch
              placeholder="Search..."
              type="text"
              value={value}
              onChange={handleChange}
            />
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
