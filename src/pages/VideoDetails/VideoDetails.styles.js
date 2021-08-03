import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 98%;
  justify-content: space-between;

  @media only screen and (max-width: 961px) {
    flex-grow: 1;
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 100px;
  cursor: pointer;
  padding: 10px;
`;

const ListItemImg = styled.img`
  width: 120px;
  height: 80px;
  display: block;
  background-size: cover;
  background-position: center;
`;

const ListItemBody = styled.div`
  margin-left: 16px;
  h5 {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: black;
  }
`;

const Text = styled.p`
  margin: 20px 0;
  ${({ as }) => {
    if (as === 'h2') return `font-weight: 500;`;
  }}
`;

export { FlexContainer, VideoList, Text, ListItemImg, ListItemBody, ListItem };
