import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 200px;
  width: 80%;
  cursor: pointer;
  padding: 10px;
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
`;

const ListItemImg = styled.img`
  width: 360px;
  height: 190px;
  display: block;
  background-size: cover;
  background-position: center;
`;

const ListItemBody = styled.div`
  margin-left: 16px;
  h5 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  h6 {
    font-size: 14px;
    margin-bottom: 10px;
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

export { FlexContainer, Text, ListItemImg, ListItemBody, ListItem };
