import { useEffect, useState } from "react";

const useVideoApi = () => {
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchVideos = async (searchWord) => {
        setLoading(true);
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBPRIGYlC55KfMs3_Xy_Y5An0-g1cH5y1w&maxResults=20&type=video&part=snippet&q=${searchWord}`);
            const searchResults = await response.json();
            //console.log("resultado", searchResults.items[0].snippet);
            setVideos(searchResults.items);
        } catch(error){
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchVideos('wizeline');
    }, []);

    return {
        videos,
        loading,
        error,
        fetchVideos,
    }
};

export default useVideoApi;