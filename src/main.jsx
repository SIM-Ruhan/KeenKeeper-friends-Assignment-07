import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/Router';
import TimelineProvider from './timeline/TimelineProvider';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
 <RouterProvider router={router} />
 <ToastContainer/>
 </TimelineProvider>

  </StrictMode>,
)
