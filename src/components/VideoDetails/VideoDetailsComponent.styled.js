import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  padding: 2rem;
  display: flex;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

VideoDetailsContainer.displayName = 'VideoDetailsContainer'

export const VideoDetailsSelectedVideo = styled.div`
  width: 70%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

VideoDetailsSelectedVideo.displayName = 'VideoDetailsSelectedVideo'

export const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
`;

Iframe.displayName = 'Iframe'

export const SelectedVideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    margin-bottom: 3rem;
    width: 100%;
  }
`;

SelectedVideoTextContainer.displayName = 'SelectedVideoTextContainer'

export const ReactionBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

ReactionBtnsContainer.displayName = 'ReactionBtnsContainer'

export const ReactionBtnPosition = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 1100px) {
    width: 200px;
  }
`;

ReactionBtnPosition.displayName ='ReactionBtnPosition'

export const TitleSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;

  @media only screen and (max-width: 700px) {
    font-size: 1.8rem;
    
  }

`;
TitleSpan.displayName = 'TitleSpan';

export const DescriptionSpan = styled.span`
  font-size: 1.6rem;

  @media only screen and (max-width: 700px) {
    display: none;
    margin-bottom: 3rem;
  }
`;
DescriptionSpan.displayName = 'DescriptionSpan';

export const ReactionBtn = styled.button`
  border: none;
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--main-blue);
  color: var(--main-white);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    box-shadow: 10px 10px 24px 0px var(--black);
  }
`;

ReactionBtn.displayName ='ReactionBtn'

export const SimilarVideosContainer = styled.aside`
  width: 30%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

SimilarVideosContainer.displayName = 'SimilarVideosContainer'