import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { GlobalContext } from './Context';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { useHistory } from 'react-router';

import { LoginViewUi } from './ui/LoginViewUi';


export const LoginView = () => {
  const { myStateReducer, dispatch } = useContext(GlobalContext);
  const history = useHistory();

  const initialForm = {
    textUser: '',
    textPass: '',
  };
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { textUser, textPass } = formValues;

  const handlelogin = (e) => {
    e.preventDefault();

    if (textUser === 'Wizeline' && textPass === 'Rocks!') {
      const lastPath = localStorage.getItem('lastPath') || '/';
      dispatch({
        type: 'actionLogin',
        payload: {
          ...myStateReducer,
          user: textUser,
        },
      });
      history.replace(lastPath);
    } else {
      alert('Usuario no valido');
      reset();
    }
  };

  const handleGooglelogin = (e) => {
    e.preventDefault();

    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
        dispatch({
            type: 'actionLoginGoogle',
            payload: {
              ...myStateReducer,
              user: user.displayName,
            },
          });
    }).catch((e) => {
        alert(`Algo anda mal: ${e}`);
    });
  }

  return (
    <LoginViewUi 
      handleInputChange={handleInputChange}
      handlelogin={handlelogin}
      handleGooglelogin={handleGooglelogin}
      textUser={textUser}
      textPass={textPass}
    />
  );
};
