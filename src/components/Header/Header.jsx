import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <Container>
      <LeftHeader></LeftHeader>
      <RightHeader></RightHeader>
    </Container>
  );
}

export default Header;
