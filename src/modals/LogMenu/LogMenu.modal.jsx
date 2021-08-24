import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useStoreContext } from '../../state/Store.provider';
import { Tittle, MenuBody, MenuOverlay } from './LogMenu.styles';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

function LogMenuModal({ children, open, login, closeMenu }) {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => modalRoot.removeChild(el);
  });
  const { removeSessionData } = useStoreContext();
  function handleOnClick() {
    if (children === 'Login') {
      login();
    } else {
      //logout
      removeSessionData();
      closeMenu();
    }
  }
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <MenuOverlay data-testid="Logmenu-close" onClick={closeMenu} />
      <MenuBody className="form-group">
        <Tittle data-testid="Logmenu" id="relatedVideo" onClick={handleOnClick}>
          {children}
        </Tittle>
      </MenuBody>
    </>,
    el
  );
}

export default LogMenuModal;
