import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    <>
      <LogoPlaceholder />
    </>
  );
}

export default Logo;

const LogoPlaceholder = styled.div`
  width: 6rem;
  height: 2.5rem;
  border-radius: 2px;
  background-color: #e5e7eb;
`;
