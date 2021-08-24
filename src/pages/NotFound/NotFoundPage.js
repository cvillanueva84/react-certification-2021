import React from 'react';
import { NotFoundGif, NotFoundLink, NotFoundSection } from './NotFoundPage.styled'

import './NotFoundPage.styles.css';

function NotFoundPage() {
  return (
    <NotFoundSection >
      <NotFoundLink to="/" >
        home
      </NotFoundLink>
      <NotFoundGif src="404.gif" alt="page not found" />
    </NotFoundSection>
  );
}

export default NotFoundPage;
