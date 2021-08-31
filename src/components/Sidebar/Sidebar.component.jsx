import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarState, setSidebarState }) => {
  return (
    <div className={sidebarState ? 'sidebar' : 'sidebar-hidden'}>
      <ul>
        <button
          type="button"
          className="sidebar-control"
          onClick={() => setSidebarState(!sidebarState)}
        >
          {' '}
          <i className="fas fa-arrow-left" />{' '}
        </button>
        <Link className="sidebar-item" to="/">
          Home
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
