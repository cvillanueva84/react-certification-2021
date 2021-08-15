import React, { useContext, useReducer } from 'react';
import storeReducer, { initialStore } from './storeReducer';

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
  return (
    <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>
  );
}

export { useStoreContext };
export default StoreProvider;
