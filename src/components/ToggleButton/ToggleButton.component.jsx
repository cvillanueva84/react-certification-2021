import React from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './ToggleButton.style';

export default function ToggleButton() {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
        <span>Dark mode</span>
      </CheckBoxWrapper>
    </div>
  );
}
