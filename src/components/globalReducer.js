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

        default:
            return state;
    }
}