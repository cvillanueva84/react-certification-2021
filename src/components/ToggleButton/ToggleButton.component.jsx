import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  width: 70px;
  background-color: #c4c4c4;
  cursor: pointer;
  user-select: none;
  border-radius: 20px;
  height: 32px;
  position: relative;
  margin-right: 10px;
`;

const DialogButton = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  padding: 8px 12px;
  border-radius: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 32px;
  min-width: unset;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: ${(props) => (props.selected ? '34px' : '2px')};
  background-color: ${(props) => (props.selected ? '#6dff93' : '#808080')};
  transition: all 0.3s ease;
`;

function ToggleButton() {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleContainer onClick={() => setSelected(!selected)}>
      <DialogButton selected={selected} />
    </ToggleContainer>
  );
}

export default ToggleButton;
