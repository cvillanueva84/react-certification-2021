import {useMemo} from 'react'
import useFetchData from './useFetchData';

function useVideoId(query) {
    const params = useMemo(() => {
      return {
        type: "video",
        part: "snippet",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        maxResults: 1,
        id: query
      }
    }, [query])
    const {response, error, loading} = useFetchData('videos', params)

    return { video: response?.data?.items ?? [], error, loading };
};

export default useVideoId;