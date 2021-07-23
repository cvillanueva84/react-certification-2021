import styled from 'styled-components';

export const CardContainer = styled.article`
  background: #fff;
  border-radius: 0.5rem;
  margin: 1rem 0;
  cursor: pointer;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

export const VideoInfo = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr;
  grid-template-rows: 1fr;
`;
export const VideoTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
  max-width: 300px;
  line-height: 18px;
  align-self: center;
`;
export const VideoDescription = styled.p`
  color: #646566;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
  grid-column: 1 / -1;
  text-align: justify;
`;

export const ChannelAvatar = styled.img`
  height: 35px;
  padding: 0;
  justify-self: center;
`;
