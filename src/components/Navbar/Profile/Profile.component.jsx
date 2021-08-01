import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  border: 2px solid #000;
  background-color: #bebebe;
  width: 2rem;
  height: 2rem;
  border-radius: 10rem;
`;

const Profile = () => {
  return <Avatar data-testid="profile-pic" />;
};

export default Profile;
