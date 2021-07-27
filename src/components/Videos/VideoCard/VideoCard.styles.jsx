import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: 345px;
  height: 345px;
  margin: 10px;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  background-image: url(${(props) => props.image});
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 0.35em;
`;

export const CardDescription = styled.p`
  padding: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.78rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;
