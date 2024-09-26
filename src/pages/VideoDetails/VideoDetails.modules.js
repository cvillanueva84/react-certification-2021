import styled from 'styled-components';

export const VideoDetailsView = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
`;

export const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`;

export const VideoDetailsContainer = styled.div`
  flex-grow: 6;
  padding: 20px 40px;
  position: relative;
`;

export const RelatedVideosContainer = styled.div`
  flex-grow: 2;
  padding: 20px 10px;
`;
