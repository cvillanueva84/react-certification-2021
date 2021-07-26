import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card.component';

describe('Card', () => {
  beforeEach(() => {
    render(<Card
                image='https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg'
                title='Video Tour | Welcome to Wizeline Guadalajara'
                description='Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...'
            />);
  });

  test('Card has title', () => {
    const title = screen.queryByText('Video Tour | Welcome to Wizeline Guadalajara');
    expect(title).toBeInTheDocument();
  });

  test('Card has description', () => {
    const description = screen.queryByText('Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...');
    expect(description).toBeInTheDocument();
  });
  
});