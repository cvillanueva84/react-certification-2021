import styled from 'styled-components';

export const VideoListContainer = styled.div`
  margin: 0 auto;

  > h3 {
    color: ${(props) => props.theme.color};
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 0px) {
    width: 100%;
    justify-content: center;
  }
  @media only screen and (min-width: 770px) {
    width: 770px;
  }
  @media only screen and (min-width: 1135px) {
    width: 1135px;
  }
  @media only screen and (min-width: 1500px) {
    width: 1500px;
  }
`;

export const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  box-sizing: border-box;
`;
