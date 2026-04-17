import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../home/Home';
import Status from '../status/Status';
import NotFound from '../components/notfound/NotFound';
import FriendDetail from '../page/FriendDetail';
import TimelinePage from '../page/TimelinePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <Home/>,
        
      },
      {
         path: "timeline",
    element: <TimelinePage/>
      },
      {
         path: "status",
    element: <Status/>
      },
      {
         path: "/:id",
    element: <FriendDetail/>
      },
    ],
    errorElement: <NotFound/>
  },
]);

