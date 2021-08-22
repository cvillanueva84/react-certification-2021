import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import { CloseBtn, ErrorDiv, ErrorSpan, FormBtns, FormInput, FormStrong, LoginBtn, LoginForm, LoginFormGroup, LoginH1, LoginSection, OverlayDiv } from './LoginModal.styled';

function LoginModal({ open, onClose }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const history = useHistory();
  const { username, password } = userInfo;

  const authenticate = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await login(userInfo);
      onClose();
      history.push('/');
    } catch (error) {
      setError(error);
      setUserInfo({
        username: '',
        password: '',
      });
    }
  };

  const handleUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return ReactDOM.createPortal(
    <>
      {open && (
        <>
          <OverlayDiv/>
          <LoginSection>
            <LoginH1>Welcome back you little astronaut!</LoginH1>
            <LoginForm onSubmit={authenticate}>
              <LoginFormGroup >
                <label htmlFor="username">
                  <FormStrong>username </FormStrong>
                  <FormInput
                    required
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUserInfo}
                    autoComplete="on"
                  />
                </label>
              </LoginFormGroup>
              <LoginFormGroup >
                <label htmlFor="password">
                  <FormStrong>password </FormStrong>
                  <FormInput
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleUserInfo}
                    autoComplete="off"
                  />
                </label>
              </LoginFormGroup>
              {error && (
                <ErrorDiv>
                  <ErrorSpan>Incorrect credentials you dummy!</ErrorSpan>
                </ErrorDiv>
              )}
              <FormBtns >
                <LoginBtn type="submit">
                  Login
                  <i className="fas fa-thumbs-up" style={{ marginLeft: '1rem' }} />
                </LoginBtn>
                <CloseBtn type="button" onClick={() => onClose()}>
                  Close
                  <i className="fas fa-window-close" style={{ marginLeft: '1rem' }} />
                </CloseBtn>
              </FormBtns>
            </LoginForm>
          </LoginSection>
        </>
      )}
    </>,
    document.getElementById('portal')
  );
}

export default LoginModal;
