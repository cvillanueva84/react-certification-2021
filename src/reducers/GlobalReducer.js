const GlobalReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT': {
            return {
                ...state,
                searchText: action.payload.searchText,
            }
        };
        case 'changeTheme': {
            return {
                ...state,
                theme: (action.payload.theme === 'light') ? 'dark': 'light',
            }
        };
        default:
            return state;
    }
}

export default GlobalReducer;