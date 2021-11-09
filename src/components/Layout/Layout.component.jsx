import React from 'react';
import PropTypes from 'prop-types';

import './Layout.styles.css';

function Layout({ children }) {
  return <main className="container">{children}</main>;
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}
export default Layout;
