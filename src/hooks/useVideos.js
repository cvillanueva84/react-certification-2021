import {useMemo} from 'react'
import useFetchData from './useFetchData';

function useVideos(query) {
    const params = useMemo(() => {
      return {
        type: "video",
        part: "snippet",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        maxResults: 20,
        q: query
      }
    }, [query])
    const {response, error, loading} = useFetchData('search', params)
    return { videos: response?.data?.items ?? [], error, loading };
};

export default useVideos;