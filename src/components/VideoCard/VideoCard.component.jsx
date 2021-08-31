import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import './VideoCard.styles.css';

const CardContainer = styled.div`
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const CardDiv = styled.div`
  width: 345px;
  height: 340px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Card = styled.div`
  padding: 2px 16px;
  overflow: auto;
`;

const Title = styled.h4`
  margin: 10px;
  margin-top: 0;
`;

const Description = styled.p`
  font-size: 15px;
  text-align: left;
`;

const VideoCard = ({
  description,
  title,
  image,
  handleOpenDetails,
  getVideoPath,
  item,
}) => {
  const { push } = useHistory();
  return (
    <CardContainer
      onClick={() => {
        handleOpenDetails(item);
        push(getVideoPath(item));
      }}
    >
      <CardDiv>
        <img className="image-card" src={image} alt="Thumbnail" />
        <Card>
          <Title>
            <b>{title}</b>
          </Title>
          <Description>{description}</Description>
        </Card>
      </CardDiv>
    </CardContainer>
  );
};

export default VideoCard;
