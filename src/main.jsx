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

import AddPost from "./Dashboard/User/AddPost/AddPost";
import MyPost from "./Dashboard/User/MyPost/MyPost";
import MyProfile from "./Dashboard/User/MyProfile/MyProfile";
import PrivetRoute from "./AllRoutes/PrivetRoute";
import AdminProfile from "./Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUser from "./Dashboard/Admin/ManageUser/ManageUser";
import MemberShip from "./Shared/MemberShip/MemberShip";
import PaymentMethod from "../src/Shared/PaymentMethod/PaymentMethod";
import Contact from "./Home/Contact";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Announcement from "./Dashboard/Admin/Announcement/Announcement";
import Activities from "./Dashboard/Admin/Activities/Activities";

const queryClient = new QueryClient();
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/membership",
        element: (
          <PrivetRoute>
            <MemberShip />
          </PrivetRoute>
        ),
      },
      {
        path: "/paymentMethod",
        element: (
          <PrivetRoute>
            <PaymentMethod />
          </PrivetRoute>
        ),
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
        element: (
          <PrivetRoute>
            <AddPost />
          </PrivetRoute>
        ),
      },
      {
        path: "myPost",
        element: (
          <PrivetRoute>
            <MyPost />
          </PrivetRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivetRoute>
            <MyProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
      },
      {
        path: "adminProfile",
        element: (
          <PrivetRoute>
            <AdminProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "manageUser",
        element: (
          <PrivetRoute>
            <ManageUser />
          </PrivetRoute>
        ),
      },
      {
        path: "announcement",
        element: (
          <PrivetRoute>
            <Announcement />
          </PrivetRoute>
        ),
      },
      {
        path: "activities",
        element: (
          <PrivetRoute>
            <Activities />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
