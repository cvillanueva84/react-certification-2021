import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
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
    render(
      <BrowserRouter>
        <Content data={data} />
      </BrowserRouter>
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('wizeline')).toBeInTheDocument();
  });
});
