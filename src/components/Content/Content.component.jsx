import React from 'react';

import { items } from '../../mocks/youtube-videos-mock.json';

import { ContentWrapper, CardContainer, Card, CardThumbnail, CardContent } from './Content.styles';

const Content = () => {
    return (
        <ContentWrapper>
            <CardContainer>
                {items.map((item) => {
                    return (
                        <Card key={item.etag}>
                            <CardThumbnail thumbnail={item.snippet.thumbnails.default.url} />
                            <CardContent>
                                <h2>{item.snippet.title}</h2>
                                <p>{item.snippet.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </CardContainer>
        </ContentWrapper>
    );
};

export default Content;