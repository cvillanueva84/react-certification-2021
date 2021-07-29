/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const VideoCardItem = styled.article`
  /* background-color: #dac6d2; */
  width: 345px;
  height: 345px;
  display: flex;
  overflow: hidden;
  /* align-self: flex-evenly; */
  flex-wrap: wrap;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid rgb(179 6 47 / 15%);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  text-align: left;
`;

export const VideoCardDetailContainer = styled.div`
  padding: 16px;
`;

export const VideoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0075em;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 0.35em;
  width: 100%;
`;

export const VideoDescription = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  line-height: 1.43;
  margin: 0;
`;

export const VideoThumbnail = styled.div`
  background-image: url(${(props) => props.backUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 140px;
  width: 100%;
`;

export const VideoThumbnailImage = styled.img`
  border: none;
  cursor: pointer;
  height: 140px;
  width: 100%;
`;
