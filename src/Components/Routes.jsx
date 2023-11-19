import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/allUsers";
import Cart from "../Pages/Dashboard/User/Cart";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import MenuPage from "../Pages/MenuPage";
import RegistrationPage from "../Pages/RegistrationPage";
import ShopPage from "../Pages/ShopPage";
import Private from "./Private";

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
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "registration",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "my-cart",
        element: (
          <Private>
            <Cart></Cart>
          </Private>
        ),
      },
      {
        path: "all-users",
        element: (
          <Private>
            <AllUsers></AllUsers>
          </Private>
        ),
      },
    ],
  },
]);
