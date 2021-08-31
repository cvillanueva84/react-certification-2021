import React, { useState, useContext } from 'react';
import { GlobalContext } from './Context';
import { useHistory } from 'react-router-dom';
import { HeaderNavUi } from './ui/HeaderNavUi';



export const HeaderNav = () => {
  const { myStateReducer, dispatch } = useContext(GlobalContext);
  const [inputValue, setValue] = useState('');
  const history = useHistory();

  const handleInputText = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'actionAddSearch',
      payload: {
        ...myStateReducer,
        search: inputValue,
      },
    });
    setValue('');
  };

  const lightMode = () => {
    dispatch({
      type: 'actionLightMode',
      payload: {
        ...myStateReducer,
      },
    });
  };

  const darkMode = () => {
    dispatch({
      type: 'actionDarkMode',
      payload: {
        ...myStateReducer,
      },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: 'actionLogout',
      payload: {
        ...myStateReducer,
        mode: 'light',
      },
    });

    history.replace('/login');
  };

  return (
    <HeaderNavUi
      handleInputText={handleInputText}
      handleSubmit={handleSubmit}
      lightMode={lightMode}
      darkMode={darkMode}
      handleLogout={handleLogout}
      myStateReducer={myStateReducer}
      inputValue={inputValue}
    />
  );
};
