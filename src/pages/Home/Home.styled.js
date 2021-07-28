import styled from 'styled-components';

const VideoCard = styled.div`
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 345px;
  margin: 15px;

  .videoTextContainer {
    padding: 16px;
  }
  .videoCardMedia {
    height: 140px;
    object-fit: cover;
    width: 100%;
  }
  .videoCardTitle {
    margin: 0;
    font-size: 1.25rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    margin-bottom: 0.35em;
  }
  .videoCardDescription {
    font-size: 0.875rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: rgba(0, 0, 0, 0.54);
  }
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export { VideoCard };
