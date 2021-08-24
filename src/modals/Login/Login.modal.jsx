import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import loginApi from '../../apis/login.api';
import { useStoreContext } from '../../state/Store.provider';
import { StrongModal, InputModal, ButtonModal, Tittle, Error } from './Login.styles';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '50px',
  width: '25%',
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

function LoginModal({ open, onClose }) {
  const modalRoot = document.getElementById('modal-root'); // A div with id=modal-root create in LogMenu.modal
  const [element] = useState(document.createElement('div')); // Create a div element which will be mounted within modal-root
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setSessionData } = useStoreContext();

  useEffect(() => {
    modalRoot.appendChild(element);
    // cleanup method to remove the appended child
    return function cleanup() {
      modalRoot.removeChild(element);
    };
  }, [modalRoot, element]);

  if (!open) return null;
  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  function handleOnClick() {
    const promise = loginApi(username, password);
    promise
      .then((data) => {
        setSessionData(data.id, data.name, data.avatarUrl);
        onClose();
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="form-group">
        <Tittle>Login</Tittle>
        <Error data-testid="errormessage">
          {errorMessage === '' ? '' : 'Username or password invalid'}
        </Error>
        <StrongModal>username </StrongModal>
        <InputModal
          data-testid="username"
          className="login"
          required
          type="text"
          onChange={handleChangeUsername}
        ></InputModal>
        <StrongModal>password </StrongModal>
        <InputModal
          data-testid="password"
          className="login"
          required
          type="password"
          onChange={handleChangePassword}
        ></InputModal>
        <ButtonModal onClick={onClose}>Cancel</ButtonModal>
        <ButtonModal data-testid="LoginButton" onClick={handleOnClick}>
          Login
        </ButtonModal>
      </div>
    </>,
    element
  );
}

export default LoginModal;
