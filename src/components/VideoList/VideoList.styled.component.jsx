/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const VideoListContainer = styled.section`
  /* background-color: #eb71b8; */
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-self: flex-evenly;
  flex-wrap: wrap;
  padding: 0 24px;
  /* box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), */
  /*   0px 1px 10px 0px rgb(0 0 0 / 12%); */
`;

export const VideoListTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: -2px;
  text-align: center;
  width: 100%;
`;

export const Videos = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
