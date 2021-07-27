import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 345px;
  height: 345px;
  background-color: white;
  margin: 10px 10px 20px;
  border-top: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 1%;
`;
export const ImageDiv = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  background-size: cover;
  justify-content: center;
  border-radius: 1%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const InfoDiv = styled.div`
  width: 100%;
  height: 183px;
  margin: 5px;
  display: grid;
  font-family: 'Roboto', sans-serif;
`;
export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
`;
export const Description = styled.p`
  font-size: 0.85em;
`;
