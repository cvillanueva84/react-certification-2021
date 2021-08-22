import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
//import '../style/LoginView.css';
import { GlobalContext } from './Context';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import styled from 'styled-components';

const ContenedorLogin = styled.div`
  margin: auto;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background-color: white;

  h1 {
    text-align: center;
  }
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button {
    color: #008cba;
    border: 2px solid #008cba;
    margin: 10px 5px 40px 5px;
    padding: 10px 12px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 30px;
  }

  button:hover {
  color: white;
  background-color: #008cba;
  transition-duration: 0.4s;
}
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;

  strong {
    display: block;
    margin-bottom: 0.4rem;
  }

  input {
    color: black;
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    border: 1px solid #008cba;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const LoginGoogle = styled.div`
  p{
    font-family: monospace;
  }
`;

const GoogleBtn = styled.div`
  cursor: pointer;
  margin-top: 5px;
  width: 100%;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
`;

const IconoGoogle = styled.div`
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: white;
  
  img {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }

  .btn-text p b{
    float: right;
    margin: 11px 4px 0 0;
    color: black;
    font-size: 17px;
    letter-spacing: 0.2px;
  }
`;


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
    <ContenedorLogin>
      <h1>Login!</h1>
      <Login>
        <form onSubmit={handlelogin} className="login-form">
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
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </GoogleBtn>
          </LoginGoogle>
        </form>
      </Login>
    </ContenedorLogin>
  );
};
