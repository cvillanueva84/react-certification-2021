import styled from 'styled-components';

const StyledVideo = styled.section`
  background-color: #F4F6F7;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #D0D3D4;
  padding-bottom: 20px;

  img {
      width: 100%;
      height: 200px;
      border-radius: 10px 10px 0px 0px;
  }
`;

const InfoVideo = styled.div`
  padding: 0px 10px;
  h3 {
      margin: 0px;
      margin-top: 5px;
      font-size: 15px;
      line-height: 15px;
  }
  p {
      margin: 0px;
      margin-top: 5px;
      font-size: 13px;
      color: #839192;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { StyledVideo, InfoVideo, AuthorInfo }