import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faBars,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';

import StyledHeader from '../StyledHeader';

function Header(props) {
  return (
    <StyledHeader>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </span>
            </li>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={props.onHandleInput}
                value={props.query}
              />
            </form>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="submit" className="nav-link" onClick={props.onHandleToggle}>
                {props.toggleStatus ? (
                  <FontAwesomeIcon icon={faToggleOn} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faToggleOff} size="lg" />
                )}
                Dark mode
              </button>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <FontAwesomeIcon icon={faUserCircle} size="lg" />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
