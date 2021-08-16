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
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
            
    
        default:
            return state
    }
}