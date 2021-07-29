import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Container = styled.header`
  color: white;
  width: 100%;
  height: 64px;
  display: flex;
  background-color: #1c5476;
  justify-content: space-between;
  align-items: center;
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchDiv = styled.div`
  width: auto;
  margin-left: 24px;
  position: relative;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
`;
const DivSearchIcon = styled.div`
  display: flex;
  height: 100%;
  padding: 0px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const DivInput = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

const InputSearch = styled.input`
  color: white;
  border-radius: 4px;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 10px 7px 8px 48px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  &:focus {
    border: 0;
    outline: none;
  }
`;

const SwitchBtn = styled.span`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
`;

const IconButton = styled.span`
  top: 0;
  left: 0;
  color: #fafafa;
  z-index: 1;
  position: absolute;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 9px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  border: 0;
  margin: 0;
  display: inline-flex;
  outline: 0;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
`;

const LabelIconButton = styled.span`
  width: 100%;
  display: flex;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  align-items: inherit;
  justify-content: inherit;
`;

const Input = styled.input`
  left: -100%;
  width: 300%;
  top: 0;
  height: 100%;
  z-index: 1;
  position: absolute;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  margin: 0;
`;

const Thumb = styled.span`
  color: white;
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  background-color: currentColor;
`;

const TouchRipple = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
`;

const TrackSwitch = styled.span`
  width: 100%;
  height: 100%;
  opacity: 0.38;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #000;
`;

const ButtonAccount = styled.button`
  color: inherit;
  height: 100%;
  padding: 12px;
  margin-left: 12px;
  align-items: center;
  cursor: pointer;
  outline: 0;
  background-color: transparent;
  border: 0;
`;

const DivAvatar = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  align-items: center;
`;

function Header() {
  return (
    <Container>
      <LeftHeader>
        <MenuIcon />
        <SearchDiv>
          <DivSearchIcon>
            <SearchIcon />
          </DivSearchIcon>
          <DivInput>
            <InputSearch placeholder="Search..." type="text" />
          </DivInput>
        </SearchDiv>
      </LeftHeader>

      <RightHeader>
        <div>
          <SwitchBtn>
            <IconButton>
              <LabelIconButton>
                <Input type="checkbox" />
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
