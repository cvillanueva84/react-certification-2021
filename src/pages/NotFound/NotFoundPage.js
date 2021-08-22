import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundSection } from './NotFoundPage.styled'

import './NotFoundPage.styles.css';

function NotFoundPage() {
  return (
    <NotFoundSection >
      <Link to="/" className="home-link">
        home
      </Link>
      <img src="404.gif" alt="page not found" />
    </NotFoundSection>
  );
}

export default NotFoundPage;
