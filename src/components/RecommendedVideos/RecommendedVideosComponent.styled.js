import styled from "styled-components";

export const TitleSpan = styled.span`
    font-size: 1.4rem;
    justify-content: left;
    width: 100%;
    display: inline-block;
`

TitleSpan.displayName = 'TitleSpan'

export const RecommendedVideoCard = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

RecommendedVideoCard.displayName = 'RecommendedVideoCard'

export const RecommendedVideoImg = styled.div`
  width: 40%;
  margin-left: 2rem;
`;
RecommendedVideoImg.displayName = 'RecommendedVideoImg'

export const RecommendedVideoText = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

RecommendedVideoText.displayName = 'RecommendedVideoText'