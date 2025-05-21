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
import AllGroup from './pages/AllGroup/AllGroup.jsx';

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
        errorElement: <ErrorPage></ErrorPage>,

      },
      {
        path: 'addHobbyGroup',
        Component: AddHobbyGroup,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: 'allHobbyGroup',
        Component: AllGroup,
        errorElement: <ErrorPage></ErrorPage>,
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
