import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListProfile from "./pages/ListProfile";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <ListProfile />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "profile/:profileName",
    element: <ProfileDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
