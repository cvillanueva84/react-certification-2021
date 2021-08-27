import React from 'react';

const GlobalContext = React.createContext({
    searchText: 'wizeline',
    theme: 'primary',
    drawerOpen: false,
});

export default GlobalContext;