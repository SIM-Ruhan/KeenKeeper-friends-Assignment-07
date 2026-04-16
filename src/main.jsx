import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import Home from './home/Home';
import Timeline from './timeline/Timeline';
import Status from './status/Status';
import NotFound from './components/notfound/NotFound';

const router = createBrowserRouter([
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
    ],
    errorElement: <NotFound/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
