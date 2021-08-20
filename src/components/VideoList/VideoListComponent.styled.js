import styled from 'styled-components';

export const VideoCardDivLight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 35rem;
  border-radius: 0.4rem;
  margin: 2rem;
  border: 1px var(--light-gray) solid;
  transition: all 0.3s ease;
  overflow-wrap: break-word;
  &:hover {
      box-shadow: 10px 10px 24px 0px var(--black);
    }
    
    @media only screen and (max-width: 670px) {
        width: 80%;
    }
`;
VideoCardDivLight.displayName = 'VideoCardDivLight';

export const VideoCardDivDark= styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 35rem;
  border-radius: 0.4rem;
  margin: 2rem;
  border: 1px var(--light-gray) solid;
  overflow-wrap: break-word;
  transition: all 0.3s ease;
  &:hover {
      -webkit-box-shadow: 5px 5px 15px 5px var(--black); 
      box-shadow: 5px 5px 15px 5px var(--light-gray) ;
    }
    
    @media only screen and (max-width: 670px) {
        width: 80%;
    }
`;
VideoCardDivDark.displayName = 'VideoCardDivDark';

export const VideoImageDiv = styled.div`
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 0.4rem;
  border-top-left-radius: 0.4rem;
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

