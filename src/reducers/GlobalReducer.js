const GlobalReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT': {
            return {
                ...state,
                searchText: action.payload.searchText,
            }
        };
        case 'CHANGE_THEME': {
            return {
                ...state,
                theme: (state.theme === 'light') ? 'dark': 'light',
            }
        };

        case 'OPEN_OR_CLOSE_DRAWER': {
            return {
                ...state,
                drawerOpen: !state.drawerOpen,
            }
        };

        case 'LOG_IN_USER': {
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    avatarUrl: action.payload.avatar,
                    loggedIn: action.payload.loggedIn,
                }
            }
        };

        case 'LOG_OUT_USER': {
            return {
                ...state,
                user:{
                    id: '',
                    name: '',
                    loggedIn: false,
                    avatarUrl: '',
                }
            }
        };

        case 'ADD_FAVORITE_VIDEO':{
            return {
                ...state,
                favouriteVideos:[
                    ...state.favouriteVideos,
                    action.payload.video,
                ]
            }
        };

        case 'REMOVE_FAVORITE_VIDEO': {
            return {
                ...state,
                favouriteVideos: state.favouriteVideos.filter(video => {
                    if(video.url == action.payload.id){
                        return false;
                    } else{
                        return true;
                    }
                }),
            }
        }

        default:
            return state;
    }
}

export default GlobalReducer;