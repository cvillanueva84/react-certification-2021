import React from 'react';
import ReactDom from 'react-dom';
import { useStoreContext } from '../../state/Store.provider';
import { types } from '../../state/storeReducer';
import { Tittle, MenuBody, MenuOverlay } from './LogMenu.styles';

function LogMenuModal({ children, open, login, closeMenu }) {
  const [store, dispatch] = useStoreContext();
  function handleOnClick() {
    if (children === 'Login') {
      login();
    } else {
      //logout
      dispatch({
        type: types.removeSessionData,
      });
      closeMenu();
    }
  }
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <MenuOverlay onClick={closeMenu} />
      <MenuBody className="form-group">
        <Tittle id="relatedVideo" onClick={handleOnClick}>
          {children}
        </Tittle>
      </MenuBody>
    </>,
    document.getElementById('portal')
  );
}

export default LogMenuModal;
