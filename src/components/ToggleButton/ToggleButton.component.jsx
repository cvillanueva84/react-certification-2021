import React from 'react';
import {
  SliderRound,
  ToggleContainer,
  ToggleSwitch,
  Typography,
} from './ToggleButton.styles';

export default function Toggle({ text, checked, setChecked }) {
  return (
    <ToggleContainer>
      <ToggleSwitch>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <SliderRound dark={checked} />
      </ToggleSwitch>
      <Typography>{text}</Typography>
    </ToggleContainer>
  );
}
