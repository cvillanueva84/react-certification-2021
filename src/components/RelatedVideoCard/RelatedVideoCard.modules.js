import styled from 'styled-components';

export const RelatedVideo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0 0 0;
  width: 100%;
`;

export const RelatedVideoThumbnail = styled.div`
  margin-right: 5px;
`;

export const RelatedVideoTitle = styled.div`
  font-size: 18px;
  font-weight: normal;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
