import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 5px;
  width: 345px;
  height: 345px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const CardImage = styled.div`
  width: 100%;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.54);
`;

function VideoCard({ title, imgUrl, description }) {
  return (
    <CardContainer>
      <CardImage style={{ backgroundImage: `url("${imgUrl}")` }} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
}

export default VideoCard;
