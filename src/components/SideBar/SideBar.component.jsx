import React, {useContext} from 'react';
import styled from 'styled-components';
import UserDetails from '../UserDetails/UserDetails.component';
import SideBarOption from '../SideBarOption/SideBarOption.component';
import GlobalContext from "../../utils/state/GlobalContext";

// ICONS
import { RiUser3Fill, RiUserSharedFill, RiUserAddFill } from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';
import { IoSettingsSharp, IoMoon} from 'react-icons/io5';

const Container = styled.div`
  width: 20rem;
  padding: 2rem;
  @media (max-width: 1068px) {
    /* display: none; */
  }
`;
const Options = styled.div`
  margin: 3rem 0;
`;
const Separator = styled.div`
  margin: 0.8rem 0;
  margin-left: 2rem;
  color: red;
  font-size: 1rem;
`;

const NoLoggedOptions = [
  {
    id: 1,
    name: 'Login',
    icon: RiUserAddFill,
  },
];

const LoggedOptions = [
  {
    id: 1,
    name: 'Profile',
    icon: RiUser3Fill,
  },
  {
    id: 2,
    name: 'Favorites',
    icon: TiStarFullOutline,
  },
  {
    id: 3,
    name: 'Logout',
    icon: RiUserSharedFill,
  },
];


function SideBar() {
  const {state, dispatch} = useContext(GlobalContext);

  const toggleDarkTheme = () => {
    dispatch({type: 'TOGGLE_THEME'});
  };

  const Settings = [
  {
    id: 1,
    name: 'Dark Theme',
    icon: IoMoon,
    onClick: toggleDarkTheme,
  },
  {
    id: 2,
    name: 'Settings',
    icon: IoSettingsSharp,
    onClick: () => {},
  },
];

  return (
    <>
      {
        state?.sideBar &&
        <Container>
          <UserDetails />
          <Options data-testid="options">
            {
              NoLoggedOptions.map(option => (
                <SideBarOption key={option.id} icon={option.icon}>{option.name}</SideBarOption>
              ))
            }
            <Separator>•</Separator>
            {
              LoggedOptions.map(option => (
                <SideBarOption key={option.id} icon={option.icon}>{option.name}</SideBarOption>
              ))
            }
            <Separator>•</Separator>
            {
              Settings.map(option => (
                <SideBarOption key={option.id} icon={option.icon} onClick={option.onClick}>{option.name}</SideBarOption>
              ))
            }
          </Options>
        </Container>
      }
    </>
  );
}

export default SideBar;
