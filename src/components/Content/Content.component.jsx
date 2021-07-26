import React from 'react';
import styled from 'styled-components';

import { items } from '../../mock/youtube-videos-mock.json';

const ContentWrapper = styled.div`
  margin: 2em;
`;

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.article`
  flex: 0 1 30%;
  display: inline-flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5em;
  box-shadow: 3px 6px 5px -1px rgba(161, 161, 161, 0.97);
  margin-bottom: 1em;

  @media (max-width: 769px) {
    flex: 0 1 100%;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-size: xxx-large;
  font-weight: lighter;
  text-align: center;
`;

const CardCover = styled.figure`
  height: 140px;
  display: block;
  margin: 0;
  border-radius: 0.5em 0.5em 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
`;

const CardContent = styled.div`
  font-family: Roboto;
  padding: 1em;

  & h2 {
    font-weight: lighter;
    font-size: large;
  }

  & p {
    color: darkgrey;
    font-weight: lighter;
    font-size: medium;
  }
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Title>Welcome to WZTube</Title>
      <div>
        <Cards>
          {items.map((item) => {
            return (
              <Card key={item.etag}>
                <CardCover thumbnail={item.snippet.thumbnails.high.url} />
                <CardContent>
                  <h2>{item.snippet.title}</h2>
                  <p>{item.snippet.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </Cards>
      </div>
    </ContentWrapper>
  );
};

export default Content;
