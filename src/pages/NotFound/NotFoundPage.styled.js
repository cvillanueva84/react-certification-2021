import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: column;
`;

NotFoundSection.displayName = 'NotFoundSection'

export const NotFoundGif = styled.img`
  width: 50%;
  margin: 0 auto;
`;

NotFoundGif.displayName = 'NotFoundGif'

export const NotFoundLink = styled(Link)`
  text-align:  center;
  font-size: 3rem;
`;

NotFoundLink.displayName = 'NotFoundLink'