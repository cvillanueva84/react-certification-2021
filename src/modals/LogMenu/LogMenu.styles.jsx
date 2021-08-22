import styled from 'styled-components';

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
const MenuBody = styled.div`
  position: fixed;
  top: 5%;
  left: 92%;
  transform: translate(-50%, -50%);
  padding: 10px;
  width: 10%;
  z-index: 1000;
  border: solid;
`;
const Tittle = styled.div`
  margin-top: 0rem;
`;

export { Tittle, MenuBody, MenuOverlay };
