import styled from 'styled-components';

const Card = styled.article`
  display: flex;
  height: 345px;
  width: 345px;
  min-width: 250px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.75);
`;

const CardLink = styled.a`
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  outline: 0;
  padding: 0;
  position: relative;
  margin: 0;
  border: 0;
`;

const CardHeader = styled.img`
  width: 100%;
  height: 140px;
  display: block;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.src});
`;

const CardBody = styled.div`
  padding: 16px;
  color: black;
`;

const CardTitle = styled.h3`
  text-align: left;
  margin-bottom: 0.35em;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const CardText = styled.p`
  font-size: 12px;
  text-align: left;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

export { Card, CardLink, CardHeader, CardBody, CardText, CardTitle };
