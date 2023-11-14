import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "shop/:id",
        element: <ShopPage></ShopPage>,
      },
    ],
  },
]);
