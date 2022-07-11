import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../../containers/common/HeaderContainer';

function Layout() {
  return (
    <div>
      <HeaderContainer />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
