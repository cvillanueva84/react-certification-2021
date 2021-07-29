/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// import { render } from '@testing-library/react';
// import React from 'react';
import youtubeData from '../../youtube-videos-mock';

const thumbnailQuality = ['default', 'medium', 'high'];

describe('User component', () => {
  it('There should be 25 elements in a single page in the response', () => {
    expect(youtubeData.items.length).toBe(25);
  });
  it('There should be a title', () => {
    expect(youtubeData.items[0].snippet.title).toBeTruthy();
  });
  it('There should be a description', () => {
    expect(youtubeData.items[0].snippet.description).toBeTruthy();
  });
  it('There should be three image thumbnails per item', () => {
    youtubeData.items.map((x) => {
      thumbnailQuality.forEach((y) => {
        expect(x.snippet.thumbnails[y].url).toBeTruthy();
      });
    });
  });
});
