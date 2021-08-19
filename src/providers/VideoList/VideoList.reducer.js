export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                posts: [],
                error: 'Unable to fetch data!'
            }

        case 'ADD_TO_FAVORITES':
            const favoriteVideos = state.favoriteVideos.concat(action.payload)

            localStorage.setItem('favorite_videos', JSON.stringify(favoriteVideos))
            return {
                ...state,
                favoriteVideos
            }

        case 'REMOVE_FROM_FAVORITES':   
            const favoriteVideosFromLocalStorage = localStorage.getItem('favorite_videos');
            const arrayOfVideos = JSON.parse(favoriteVideosFromLocalStorage)
            const filteredVideos = arrayOfVideos.filter(video => video.id !== action.payload)
            localStorage.setItem('favorite_videos', JSON.stringify(filteredVideos))
            return {
                ...state,
                filteredVideos
            }
            
    
        default:
            return state
    }
}