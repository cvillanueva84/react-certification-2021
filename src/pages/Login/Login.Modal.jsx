import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import { CloseBtn, LoginBtn } from './StyledComponents';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginModal({ open, onClose }) {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

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
                  <input required type="text" id="username" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <strong>password </strong>
                  <input required type="password" id="password" />
                </label>
              </div>
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
