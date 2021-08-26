import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (search) => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        let mounted = true
        const getYoutubeVideos = async () => {
            try {
                const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&&key=${process.env.REACT_APP_GOOGLE_APP_API_KEY}&type=video&maxResults=23&q=${search}`
                const resp = await axios.get(url)
                const data = resp.data.items
                if (mounted) {
                    setVideos(data);
                }
            } catch (error) {
                throw new Error(error)
            }
        }
        getYoutubeVideos()    
        return function cleanup() {
            mounted = false
        }
    }, [search])
    return {
        videos
    }
}
