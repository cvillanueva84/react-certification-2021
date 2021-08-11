import { useEffect, useState } from 'react'
export const useFetch = (id) => {
    const [singleVideo, setSingleVideo] = useState([])

    useEffect(() => {
        const getSingleVideo = async () => {
            try {
                const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_GOOGLE_APP_API_KEY}&part=snippet`
                const resp = await fetch(url)
                const data = await resp.json()
                setSingleVideo(data.items);
            } catch (error) {
                throw new Error(error)
            }

        }
        getSingleVideo()
    }, [id])

    return {
        singleVideo
    }
}