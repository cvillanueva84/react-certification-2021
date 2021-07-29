import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        image="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
        title="Test title"
        description="Test description"
      ></Card>
    );
  });
  test('should contains a title', () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
  test('should contains a description', () => {
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});
