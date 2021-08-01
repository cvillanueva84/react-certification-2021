import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  padding: 1rem;
  @media(max-width: 629px) {
    width: 100%;
  }
`;

function VideoHome(props) {

  return (
    <Container>
        VIDEO ID: {props.match.params.id}
    </Container>
  );
}

export default VideoHome;
