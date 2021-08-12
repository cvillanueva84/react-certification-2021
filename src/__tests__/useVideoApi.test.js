import React from 'react';
import useVideoApi from '../hooks/useVideoApi';
import { renderHook, act } from '@testing-library/react-hooks';

describe('UseVideoApi tests', () => {
  test('shouldn´t return any videos', async () => {
    const { result } = renderHook(() => useVideoApi());
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });

  test('should return a video array', async () => {
    const params = { q: 'wizeline' };
    const { result, waitForNextUpdate } = renderHook(() => useVideoApi());
    const { fetchVideos } = result.current;
    await act(async() => fetchVideos({ params }));
    waitForNextUpdate();
    const { data,error,loading } = result.current;
    expect(data.items.length).toBe(24);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });

  test('should return a video array with the related videos', async () => {
    const params = { relatedToVideoId: "lWQ69WX7-hA", type: 'video' };
    const { result, waitForNextUpdate } = renderHook(() => useVideoApi());
    const { fetchVideos } = result.current;
    await act(async() => fetchVideos({ params }));
    waitForNextUpdate();
    const { data,error,loading } = result.current;
    expect(data.items.length).toBe(24);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });
});
