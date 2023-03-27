import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SideMenu } from 'lib/components/Layout';

export const Layout: FC = () => (
  <>
    <Header />
    <SideMenu />
    <main>
      <Outlet />
    </main>
  </>
);
