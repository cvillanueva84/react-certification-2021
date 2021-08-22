import styled from 'styled-components';

const Title = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`;
const Description = styled.div`
  font-size: 1rem;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;
const VideoDetails = styled.div`
  overflow: hide;
  width: 1300px;
  height: 700px;
  @media (max-width: 1800px) {
    width: 1100px;
    height: 600px;
  }
  @media (max-width: 1600px) {
    width: 900px;
    height: 550px;
  }
  @media (max-width: 1400px) {
    width: 700px;
    height: 400px;
  }
`;
const Grid = styled.section`
  display: flex;
  padding-left: 3.5rem;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 935px) {
    padding: 0rem;
    gap: 14rem;
    display: grid;
  }
`;

export { Title, Description, Video, VideoDetails, Grid };
