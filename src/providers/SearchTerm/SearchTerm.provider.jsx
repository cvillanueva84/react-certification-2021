import React, { useState, useContext } from 'react';

const GlobalContext = React.createContext(null);

function useSearchTerm() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useSearchTerm" without an SearchTermProvider!`);
  }
  return context;
}

function SearchTermProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('Love of lesbian');

  return (
    <GlobalContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useSearchTerm };
export default SearchTermProvider;
