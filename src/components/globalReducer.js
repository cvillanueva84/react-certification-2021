// const initialState = {
//     mode: 'light',
//     search: 'wizeline',
//     videoData: {}
// };

export const globalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'actionLightMode':
            return {
                ...action.payload,
                mode: 'light'
            }

        case 'actionDarkMode':
            return {
                ...action.payload,
                mode: 'dark'
            }
        
        case 'actionAddSearch':
            return {
                ...action.payload,
            }
        
        case 'actionAddVideoData':
            return {
                ...action.payload,
            }
        
        case 'actionAddFavorites':
            return {
                ...action.payload,
            }

        case 'actionLogin':
            return {
                ...action.payload,
                logged: true
            }
        
        case 'actionLogout':
            return {
                ...action.payload,
                logged: false,
                user: ''
            }

        default:
            return state;
    }
}