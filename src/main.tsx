import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout, NewsDetail, NewsList } from 'lib/pages';

const routes = [
  {
    path: '/country/:countryId',
    element: <NewsList />
  },
  {
    path: '/country/:countryId/:newsId',
    element: <NewsDetail />
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element }))
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
