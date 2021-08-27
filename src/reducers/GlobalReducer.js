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
        }

        default:
            return state;
    }
}

export default GlobalReducer;