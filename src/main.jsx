import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './pages/Root/Root.jsx';
import ErrorPage from './pages/Error/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import AddHobbyGroup from './pages/AddHobbyGroup/AddHobbyGroup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path:'/',
        Component: Home,

      },
      {
        path: 'addHobbyGroup',
        Component: AddHobbyGroup,
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
