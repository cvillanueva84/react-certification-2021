import styled from 'styled-components';

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
  background-color: #060b26;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);
  }
`;

ReactionBtn.displayName ='ReactionBtn'