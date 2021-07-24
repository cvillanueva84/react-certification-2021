import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Email = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #a0a0a0;
`;

function UserDetails() {
  return (
    <Container>
      <Name>{'Example Name'}</Name>
      <Email>{'example@example.com'}</Email>
    </Container>
  );
}

export default UserDetails;
