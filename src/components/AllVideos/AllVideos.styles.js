import styled from 'styled-components';

const StyledVideos = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 30px;
grid-auto-rows: minmax(100px, auto);

@media screen and (max-width: 1300px) {
  grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width: 1000px) {
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 530px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

export { StyledVideos }