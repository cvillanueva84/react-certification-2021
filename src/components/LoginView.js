import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { GlobalContext } from './Context';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import {
  ContenedorLogin,
  Login,
  FormGroup,
  LoginGoogle,
  GoogleBtn,
  IconoGoogle,
  FormStyled,
  Text
} from '../style/LoginViewStyled';

export const LoginView = ({ history }) => {
  const { myStateReducer, dispatch } = useContext(GlobalContext);

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
    <ContenedorLogin>
      <h1>Login!</h1>
      <Login>
        <FormStyled onSubmit={handlelogin}>
          <FormGroup>
            <label>
              <strong>Username:</strong>
              <input
                required
                type="text"
                placeholder="Your username"
                name="textUser"
                value={textUser}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </label>
          </FormGroup>

          <FormGroup>
            <label>
              <strong>Password:</strong>
              <input
                required
                type="password"
                placeholder="Your password"
                name="textPass"
                value={textPass}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </label>
          </FormGroup>

          <button type="submit" onClick={handlelogin}>
            Login
          </button>

          <LoginGoogle>
            <p>Login with Google:</p>
            <GoogleBtn onClick={handleGooglelogin}>
              <IconoGoogle>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </IconoGoogle>
              <Text>
                <b>Sign in with google</b>
              </Text>
            </GoogleBtn>
          </LoginGoogle>
        </FormStyled>
      </Login>
    </ContenedorLogin>
  );
};
