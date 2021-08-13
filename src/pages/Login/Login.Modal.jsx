import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginModal({ open, onClose }) {
  if (!open) return null;
  // const { login } = useAuth();
  // const history = useHistory();

  // function authenticate(event) {
  //   event.preventDefault();
  //   login();
  //   history.push('/secret');
  // }

  return ReactDOM.createPortal(
    <>
      <div className="overlay_styles" />
      <section className="login">
        <h1>Welcome back!</h1>
        <form className="login-form">
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
          <button type="submit">login</button>
          <button onClick={() => onClose()}>Close</button>
        </form>
      </section>
    </>,
    document.getElementById('portal')
  );
}

export default LoginModal;
