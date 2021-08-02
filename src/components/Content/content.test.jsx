import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

beforeEach(cleanup);

const data = [
  {
    id: '01',
    snippet: {
      title: 'Hello',
      description: 'description',
      thumbnails: {
        medium: {
          url: 'http://www.youtube.com/watch?v',
        },
      },
    },
  },
  {
    id: '02',
    snippet: {
      title: 'wizeline',
      description: 'description',
      thumbnails: {
        medium: {
          url: 'http://youtube.com/watch?v=kdkdj',
        },
      },
    },
  },
];

describe('Content', () => {
  it('should render a Object', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Content data={data} />
      </BrowserRouter>
    );
    expect(getByText('Hello')).toBeInTheDocument();
    expect(getByText('wizeline')).toBeInTheDocument();
  });
});
