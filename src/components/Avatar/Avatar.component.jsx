import React from 'react';
import styled from 'styled-components';

function Avatar() {
  return (
    <>
      <AvatarPlaceholder />
    </>
  );
}

export default Avatar;

const AvatarPlaceholder = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #e5e7eb;
`;
