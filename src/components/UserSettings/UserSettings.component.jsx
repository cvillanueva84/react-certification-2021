import React from 'react';
import {
  UserSettingsContainer,
  ThemeSwitchContainer,
  ThemeSwitch,
  LabelContainer,
  UserIcon,
} from './UserSettings.styled.component';
import { InputLabel } from '../../common/Element.styled';

function UserSettings(props) {
  return (
    <UserSettingsContainer minWidth={props.minWidth}>
      <ThemeSwitchContainer>
        <ThemeSwitch name="themeSwitch" />
      </ThemeSwitchContainer>
      <LabelContainer>
        <InputLabel>Dark Mode</InputLabel>
      </LabelContainer>
      <UserIcon />
    </UserSettingsContainer>
  );
}

export default UserSettings;
