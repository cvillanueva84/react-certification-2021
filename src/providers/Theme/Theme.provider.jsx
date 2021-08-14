import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
}

function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState('light');
  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { useTheme };
export default ThemeProvider;
