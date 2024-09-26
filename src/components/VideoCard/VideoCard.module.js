import styled from 'styled-components';

export const VideoThumbnail = styled.div`
  height: auto;
  width: 100%;
`;

export const VideoInfo = styled.div`
  padding: 0 20px;
  text-align: left;
`;

export const VideoTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const VideoDescription = styled.div`
  font-size: 12px;
  font-weight: normal;

  &:hover {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
