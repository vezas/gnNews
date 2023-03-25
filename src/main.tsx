import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'lib/store/store';
import { Layout, NewsDetail, NewsList } from 'lib/pages';
import { Theme, GlobalStyles } from 'lib/styles';

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
  <Provider store={store}>
    <Theme>
      <GlobalStyles />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Theme>
  </Provider>
);
