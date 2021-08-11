export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                posts: [],
                error: 'Unable to fetch data!'
            }
            
    
        default:
            return state
    }
}