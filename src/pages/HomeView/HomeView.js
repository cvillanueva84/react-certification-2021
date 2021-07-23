import React from 'react';
import { Link } from 'react-router-dom';

export const HomeView = () => {
  return (
    <>
      <h1>Aqui arriba voy a poner un Header</h1>

      <p>Aqui voy a poner vidios</p>

      <pre>
        <Link to="/"> ← go back</Link>
      </pre>
    </>
  );
};
