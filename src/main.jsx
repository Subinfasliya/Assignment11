import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserDetailPage from "./pages/UserDetailPage.jsx";
import { usersLoader } from "./loaders/usersLoader.js";
import Loader from "./components/Loader.jsx";



const router = createBrowserRouter([
  {
    path:"/",
    Component: App,
    children:[
      {
        index:true,
        Component: HomePage
      },
      {
        path:"about",
        Component: AboutPage
      },
      {
        path:"users",
        Component: UserPage,
        loader: usersLoader,
        HydrateFallback: ()=> <Loader/>
      },
      {
        path:"users/:id",
        Component: UserDetailPage
      }
    ]
  }
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
