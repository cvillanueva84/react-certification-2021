import styled from 'styled-components';

export const CardContainer = styled.article`
  background: #fff;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: block;
`;

export const VideoInfo = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
`;
export const VideoTitle = styled.h3`
  text-transform: capitalize;
  margin: 0;
  font-weight: 700;
  cursor: pointer;
`;
export const VideoDescription = styled.p`
  color: black;
  font-size: 10px;
  display: block;
`;

export const ChannelAvatar = styled.img`
  height: 30px;
`;
