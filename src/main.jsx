import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import AddHobbyGroup from "./pages/AddHobbyGroup/AddHobbyGroup.jsx";
import AllGroup from "./pages/AllGroup/AllGroup.jsx";
import GroupDetails from "./pages/GroupDetails/GroupDetails.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoutes.jsx";
import MyGroups from "./pages/MyGroups/MyGroups.jsx";
import UpdateGroup from "./pages/UpdateGroup/UpdateGroup.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("https://hobby-hub-server-alpha.vercel.app/createGroups"),
        Component: Home,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "addHobbyGroup",
        element: (
          <PrivateRoute>
            <AddHobbyGroup></AddHobbyGroup>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "groups/:id",
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-alpha.vercel.app/createGroups/${params.id}`),
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "allHobbyGroup",
        loader: () => fetch("https://hobby-hub-server-alpha.vercel.app/createGroups"),
        Component: AllGroup,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "login",
        Component: Login,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "register",
        Component: Register,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "myGroups",
        element: (
          <PrivateRoute>
            <MyGroups></MyGroups>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "updateGroup/:id",
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-alpha.vercel.app/createGroups/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "dashboard",
        loader: () => fetch("https://hobby-hub-server-alpha.vercel.app/createGroups"),
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>
      }
    ],
  },
  // {
  //           path: '/auth',
  //           element: <AuthLayout></AuthLayout>,
  //           children: [
  //               {
  //                   path: 'login',
  //                   element: <Login></Login>,

  //               },
  //               {
  //                   // path: 'register',
  //                   // element: <Register></Register>,

  //               }
  //           ]

  //       },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
