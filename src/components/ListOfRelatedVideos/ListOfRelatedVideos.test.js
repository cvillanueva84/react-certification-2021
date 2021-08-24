import React from 'react';
import { render, screen } from '@testing-library/react';
import ListOfRelatedVideos from './ListOfRelatedVideos.component';
import { BrowserRouter } from 'react-router-dom';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/video/id',
  }),
  useParams: () => ({
    id: 'id',
  }),
}));
describe('ListOfRelatedVideos', () => {
  beforeEach(() => {
    const video = {
      items: [
        {
          kind: 'youtube#searchResult',
          etag: '7VY0u60YdqamyHOCAufd7r6qTsQ',
          id: {
            kind: 'youtube#video',
            videoId: 'HYyRZiwBWc8',
          },
          snippet: {
            publishedAt: '2019-04-18T18:48:04Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Test title',
            description:
              'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2019-04-18T18:48:04Z',
          },
        },
      ],
    };
    render(
      <BrowserRouter>
        <ListOfRelatedVideos videos={video} />
      </BrowserRouter>
    );
  });
  test('should contains a title corresponding to the the releatedVideo render', () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
  test('should work when the pathname is /', () => {
    expect(window.location.href).toEqual('http://localhost/');
  });
});
