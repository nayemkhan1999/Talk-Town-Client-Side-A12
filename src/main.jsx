import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import AuthProvider from "./FirebaseAuthentication/AuthProvider";
import Login from "./FirebaseAuthentication/Login";
import Error from "./Shared/Error";
import Register from "./FirebaseAuthentication/Register";
import { Toaster } from "react-hot-toast";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import AddPost from "./Home/AddPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "addPost",
        element: <AddPost />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
