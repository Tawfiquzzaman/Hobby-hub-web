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
import GroupDetails from './pages/GroupDetails/GroupDetails.jsx';

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
        path: 'groups/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/createGroups/${params.id}`),
        Component: GroupDetails,

      },
      {
        path: 'allHobbyGroup',
        loader: () => fetch('http://localhost:3000/createGroups'),
        Component: AllGroup,
        errorElement: <ErrorPage></ErrorPage>,
      },
      
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
