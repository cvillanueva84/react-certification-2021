import React from 'react';
import styled from 'styled-components';
import { MoonIcon } from '@heroicons/react/outline';

function ThemeSwitch() {
  return (
    <>
      <MoonIconStyled />
    </>
  );
}

export default ThemeSwitch;

const MoonIconStyled = styled(MoonIcon)`
  width: 2rem;
  cursor: pointer;
  color: #9ca3af;
`;
