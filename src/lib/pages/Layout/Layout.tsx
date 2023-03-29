import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SideMenu } from 'lib/components/Layout';
import { AboutModal } from 'lib/components/AboutModal';

export const Layout: FC = () => (
  <>
    <Header />
    <SideMenu />
    <main>
      <Outlet />
    </main>
    <Footer />
    <AboutModal />
  </>
);
