export const globalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'actionLightMode':
            return {
                ...action.payload,
                mode: 'light',
            };

        case 'actionDarkMode':
            return {
                ...action.payload,
                mode: 'dark',
            };

        case 'actionAddSearch':
            return {
                ...action.payload,
            };

        case 'actionAddVideoData':
            return {
                ...action.payload,
            };

        case 'actionAddVideoDataFav':
            return {
                ...action.payload,
            };

        case 'actionAddFavorites':
            return {
                ...action.payload,
            };

        case 'actionDelete':
            return {
                ...state,
                favorites: state.favorites.filter((vid) => vid.videoId !== action.payload),
            };

        case 'actionLogin':
            return {
                ...action.payload,
                logged: true,
            };

        case 'actionLoginGoogle':
            return {
                ...action.payload,
                logged: true,
            };

        case 'actionLogout':
            return {
                ...action.payload,
                logged: false,
                user: '',
                videoDataFav: {},
            };

        default:
            return state;
    }
};
