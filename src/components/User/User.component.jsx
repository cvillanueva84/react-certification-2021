import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  margin-left: 1em;
  display: flex;
  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;

export const User = () => {
  return (
    <UserContainer>
      <img src="https://via.placeholder.com/100x100" alt="userPicture" />
    </UserContainer>
  );
};

export default User;
