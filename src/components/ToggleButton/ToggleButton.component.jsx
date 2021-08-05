import React from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel, Title } from './ToggleButton.style';

export default function ToggleButton() {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
        <Title>dark mode</Title>
      </CheckBoxWrapper>
    </div>
  );
}
