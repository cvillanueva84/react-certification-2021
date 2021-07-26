import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 345px;
  height: 345px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  margin: 10px;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
`;

const H6 = styled.h6`
  margin: 5px;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const P = styled.p`
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  color: rgba(0, 0, 0, 0.54);
`;

export { CardWrapper, HeaderWrapper, H6, P };
