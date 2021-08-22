import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavText } from './Navbar.styles.jsx';
import { useStoreContext } from '../../state/Store.provider';

function Navbar() {
  const [store] = useStoreContext();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Link to="#">
        <img id="menu" src="menu_icon.png" alt="page not found" onClick={showSidebar} />
      </Link>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSidebar}>
          <Link to="#">
            <img id="menu" src="close-window-32.png" alt="page not found" />
          </Link>
          {store.sidebarData.map((item, index) => {
            return (
              <NavText key={index}>
                <Link to={item.path}>{item.title}</Link>
              </NavText>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
