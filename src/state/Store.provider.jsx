import React, { useContext, useReducer } from 'react';
import storeReducer, { initialStore, types } from './storeReducer';

const StoreContext = React.createContext(null);

function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(`Can't use "useStoreContext" without an StoreProvider!`);
  }
  return context;
}

function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  function setSearchTerm(searchTerm) {
    dispatch({
      type: types.setSearchTerm,
      payload: searchTerm,
    });
  }
  function setTheme() {
    dispatch({
      type: types.setTheme,
      payload: store.theme === 'light' ? 'dark' : 'light',
    });
  }
  function setSessionData(id, name, avatarUrl) {
    dispatch({
      type: types.setSessionData,
      payload: {
        id: id,
        name: name,
        avatarUrl: avatarUrl,
      },
    });
  }
  function removeSessionData() {
    dispatch({
      type: types.removeSessionData,
    });
  }
  return (
    <StoreContext.Provider
      value={{ store, setSearchTerm, setTheme, setSessionData, removeSessionData }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { useStoreContext };
export default StoreProvider;
