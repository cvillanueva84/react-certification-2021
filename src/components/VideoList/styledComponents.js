import styled from 'styled-components';

export const VideoCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 35rem;
  border-radius: 0.4rem;
  margin: 2rem;
  border: 1px #dad4d4 solid;
  transition: all 0.3s ease;
  &:hover {
      box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);
    }
    
    @media only screen and (max-width: 670px) {
        width: 80%;
    }
`;
VideoCardDiv.displayName = 'VideoCardDiv';

export const VideoImageDiv = styled.div`
  height: 140px;
`;
VideoImageDiv.displayName = 'VideoImageDiv';

export const TitleSpan = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2rem;
`;
TitleSpan.displayName = 'TitleSpan';

export const DescriptionSpan = styled.span`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-align: left;
  margin: 2rem;
  `;
DescriptionSpan.displayName = 'DescriptionSpan';

