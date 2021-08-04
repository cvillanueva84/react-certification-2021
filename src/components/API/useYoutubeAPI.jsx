import { useState } from "react";
import { youtubeClient, buildQueryParams } from "../../helpers";

const useYoutubeAPI = () => {
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        q: query
      });
      const resp = await youtubeClient(`/search?${queryParams}&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
      setVideos(resp.data);
      console.log("JSON",videos);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    videos,
    loading,
    error,
    fetchVideos
  };
};

export default useYoutubeAPI;
