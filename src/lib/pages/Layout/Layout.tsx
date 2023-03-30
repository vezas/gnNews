import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SideMenu } from 'lib/components/Layout';
import { SummaryModal } from 'lib/components/SummaryModal';

export const Layout: FC = () => (
  <>
    <Header />
    <SideMenu />
    <main>
      <Outlet />
    </main>
    <Footer />
    <SummaryModal />
  </>
);
