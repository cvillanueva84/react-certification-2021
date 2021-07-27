import React from 'react';
import { render, screen } from '@testing-library/react';
import ListVideos from './ListVideos.component';

const mockData = [
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
      title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
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
  {
    kind: 'youtube#searchResult',
    etag: 'by0t_nrT2TB-IQkQpgSWUVUwpKI',
    id: {
      kind: 'youtube#video',
      videoId: 'Po3VwR_NNGk',
    },
    snippet: {
      publishedAt: '2019-03-05T03:52:55Z',
      channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
      title: 'Wizeline hace sentir a empleados como en casa',
      description:
        'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'El Economista TV',
      liveBroadcastContent: 'none',
      publishTime: '2019-03-05T03:52:55Z',
    },
  },
];

beforeEach(() => {
  render(<ListVideos videos={mockData} />);
});

describe('ListVideos component', () => {
  test('contains VideoCard components for each video', () => {
    expect(screen.getAllByRole('heading').length).toBe(mockData.length);
  });
});
