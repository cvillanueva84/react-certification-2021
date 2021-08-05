import styled from 'styled-components';

export const VideoWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 800px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  text-align: center;
`;

export const VideoHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const VideoTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const VideoBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const VideoFieldset = styled.fieldset`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
`;

export const VideoDescription = styled.label`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
`;

export const VideoFrame = styled.iframe`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 600px;
  height: 600px;
  display: block;
  background: black;
`;
