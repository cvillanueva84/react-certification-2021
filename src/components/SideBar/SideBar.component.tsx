import React from 'react';
import styled from 'styled-components';
import UserDetails from '../UserDetails/UserDetails.component';

const Container = styled.div`
  width: 25rem;
  padding: 2rem;
`;

function SideBar() {
  return (
    <Container>
      <UserDetails />
    </Container>
  );
}

export default SideBar;
