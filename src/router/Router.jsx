import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../home/Home';
import Timeline from '../timeline/Timeline';
import Status from '../status/Status';
import NotFound from '../components/notfound/NotFound';
import FriendDetail from '../page/FriendDetail';

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
    element: <Timeline/>
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

