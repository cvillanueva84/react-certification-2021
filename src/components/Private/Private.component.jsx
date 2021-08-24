import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStoreContext } from '../../state/Store.provider';

function Private({ children, ...rest }) {
  const { store } = useStoreContext();

  return (
    <Route
      {...rest}
      render={() => (store.sessionData.id === '' ? <Redirect to="/" /> : children)}
    />
  );
}

export default Private;
