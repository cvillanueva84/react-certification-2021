import React, { useState } from 'react';
import ReactDom from 'react-dom';
import loginApi from '../../apis/login.api';
import { useStoreContext } from '../../state/Store.provider';
import { types } from '../../state/storeReducer';
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
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [store, dispatch] = useStoreContext();
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
        dispatch({
          type: types.setSessionData,
          payload: {
            id: data.id,
            name: data.name,
            avatarUrl: data.avatarUrl,
          },
        });
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
        <Error>{errorMessage === '' ? '' : 'Username or password invalid'}</Error>
        <StrongModal>username </StrongModal>
        <InputModal
          id="login"
          required
          type="text"
          onChange={handleChangeUsername}
        ></InputModal>
        <StrongModal>password </StrongModal>
        <InputModal
          id="login"
          required
          type="password"
          onChange={handleChangePassword}
        ></InputModal>
        <ButtonModal onClick={onClose}>Cancel</ButtonModal>
        <ButtonModal onClick={handleOnClick}>Login</ButtonModal>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default LoginModal;
