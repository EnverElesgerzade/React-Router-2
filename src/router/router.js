import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Favorites from "../pages/Favorites";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/basket",
        Component: Basket,
      },
      {
        path: "/favoites",
        Component: Favorites,
      },
      {
        path: "*",
        Component: NotFound
      }
    ]
  }
])