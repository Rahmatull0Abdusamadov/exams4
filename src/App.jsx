import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/layout';
import Buyaccount from './companents/buy Account/buyaccount';
import Sellaccount from './companents/sellaccount/sellaccount';
import Services from './companents/services/services';
import Blog from './companents/blog/blog';
import Aboutblog from './companents/blog/aboutblog/aboutblog';
import Search from './companents/search/search';
import DarkModeToggle from './companents/darkmode/darkmode';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout/>,
    children: [
      {
        index : true,
        element: <Buyaccount/>
      },
      {
        path: "/sell-account",
        element: <Sellaccount/>,
      },
      { 
        path: "/services",
        element: <Services/>,
      },  
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/Aboutblog",
        element: <Aboutblog/>
      },
      {
        path: "/search",
        element: <Search/>
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
