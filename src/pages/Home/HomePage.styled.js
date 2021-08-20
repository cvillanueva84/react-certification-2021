import styled from 'styled-components'
import { css } from '@emotion/react';


export const SectionContainer = styled.section`
  width: 95%;
  margin: auto;
`;
SectionContainer.displayName = 'SectionContainer';
export const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
VideoListContainer.displayName = 'VideoListContainer';

export const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #060b26;
`;

