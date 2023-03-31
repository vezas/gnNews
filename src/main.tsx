import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { APP_CONFIG } from 'lib/config';
import { store } from 'lib/store/store';
import { Home, Layout, NewsList, loader as newsListLoader } from 'pages';
import { loader as layoutLoader } from 'lib/components/Layout';
import { Theme, GlobalStyles } from 'lib/styles';

const baseURL = APP_CONFIG.BASE_URL || '/';

const router = createBrowserRouter([
  {
    path: baseURL,
    element: <Layout />,
    loader: layoutLoader,
    errorElement: <ToastContainer />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: `${baseURL}/country/:countryId`,
        element: <NewsList />,
        loader: newsListLoader
      }
    ]
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
