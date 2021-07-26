import React, { useState } from 'react';
import {ToggleContainer, DialogButton} from './ToggleButton.styled';


function ToggleButton() {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleContainer onClick={() => setSelected(!selected)}>
      <DialogButton selected={selected} />
    </ToggleContainer>
  );
}

export default ToggleButton;
