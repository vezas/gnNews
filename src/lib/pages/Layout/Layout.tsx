import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'lib/components/Layout';

export const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);
