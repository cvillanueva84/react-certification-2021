import React from 'react';
import Header from '../Header';
function Layout(props) {
  return (
    <div>
      <Header setSearchTerm={props.sST}></Header>
      <main className="container">{props.children}</main>
    </div>
  );
}

export default Layout;
