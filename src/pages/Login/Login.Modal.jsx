import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import { CloseBtn, ErrorDiv, ErrorSpan, LoginBtn } from './StyledComponents';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

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
      await login(userInfo);
      setError(null);
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
          <div className="overlay_styles" />
          <section className="login">
            <h1>Welcome back you little astronaut!</h1>
            <form onSubmit={authenticate} className="login-form">
              <div className="form-group">
                <label htmlFor="username">
                  <strong>username </strong>
                  <input
                    required
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUserInfo}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <strong>password </strong>
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleUserInfo}
                  />
                </label>
              </div>
              {error && (
                <ErrorDiv>
                  <ErrorSpan>Incorrect credentials you dummy!</ErrorSpan>
                </ErrorDiv>
              )}
              <div className="form-btns">
                <LoginBtn type="submit">
                  Login
                  <i className="fas fa-thumbs-up" style={{ marginLeft: '1rem' }} />
                </LoginBtn>
                <CloseBtn type="button" onClick={() => onClose()}>
                  Close
                  <i className="fas fa-window-close" style={{ marginLeft: '1rem' }} />
                </CloseBtn>
              </div>
            </form>
          </section>
        </>
      )}
    </>,
    document.getElementById('portal')
  );
}

export default LoginModal;
