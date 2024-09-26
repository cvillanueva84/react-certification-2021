import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';

import SideMenu from '../SideMenu';
import Header from '../Header';

function AppLayout(props) {
  const { handleSubmit } = props;
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);

  return (
    <div>
      <Drawer
        anchor="left"
        classes={{
          paper: 'side-menu-container',
        }}
        open={isSideMenuActive}
        onClose={() => setIsSideMenuActive(false)}
      >
        <SideMenu toggleSideMenu={setIsSideMenuActive} />
      </Drawer>
      <Header setIsSideMenuActive={setIsSideMenuActive} handleSubmit={handleSubmit} />
    </div>
  );
}

export default AppLayout;
