import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import '../style/LoginView.css';
import { GlobalContext } from './Context';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

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
        console.log(e);
    });
  }

  return (
    <section className="contenedor-login">
      <h1>Login!</h1>
      <div className="login">
        <form onSubmit={handlelogin} className="login-form">
          <div className="form-group">
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
          </div>

          <div className="form-group">
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
          </div>

          <button type="submit" onClick={handlelogin}>
            Login
          </button>

          <div className="auth__social-networks">
            <p>Login with Google:</p>
            <div className="google-btn" onClick={handleGooglelogin}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
