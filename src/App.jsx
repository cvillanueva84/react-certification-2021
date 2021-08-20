import React, { useReducer } from 'react';
import Router from './components/App/Router.component';
import { appReducer } from './state/appReducer';
import { AppContext } from './state/AppContext';

// const init = () => {
//   return (
//     JSON.parse(localStorage.getItem('darkTheme')) || {
//       darkTheme: true,
//     }
//   );
// };

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    darkTheme: true,
    search: '',
    selectedVideo: {},
  });
  console.log(state);

  // useEffect(() => {
  //   localStorage.setItem('darkTheme', JSON.stringify(state.darkTheme));
  // }, [state.darkTheme]);

  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <Router />
      </AppContext.Provider>
    </div>
  );
};
