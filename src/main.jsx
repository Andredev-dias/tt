import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import Contact from './Contact.jsx'
import Calcs from './Calcs.jsx'
import Req from './Req.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/calcs",
    element: <Calcs />,
  },
  {
    path: "/requisicao",
    element: <Req />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <RouterProvider router={router} />
  </StrictMode>,
)
