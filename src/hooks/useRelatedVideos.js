import {useMemo} from 'react'
import useFetchData from './useFetchData';

function useRelatedVideos(query) {
    const params = useMemo(() => {
      return {
        type: "video",
        part: "snippet",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        maxResults: 10,
        relatedToVideoId: query
      }
    }, [query])
    const {response, errorRelated, loadingRelated} = useFetchData('search', params)
    
    return { videos: response?.data?.items ?? [], errorRelated, loadingRelated };
};

export default useRelatedVideos;