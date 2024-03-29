import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Layout/Dashboard";
import AddItems from "../Pages/Dashboard/Admin/AddItems";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import UpdateItems from "../Pages/Dashboard/Admin/UpdateItems";
import AllUsers from "../Pages/Dashboard/Admin/allUsers";
import MyCart from "../Pages/Dashboard/User/MyCart";
import Payment from "../Pages/Dashboard/User/Payment";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";
import UserHome from "../Pages/Dashboard/User/UserHome";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import MenuPage from "../Pages/MenuPage";
import RegistrationPage from "../Pages/RegistrationPage";
import ShopPage from "../Pages/ShopPage";
import AdminPrivate from "./AdminPrivate";
import Akib from "./Akib";
import Contact from "./Contact";
import Private from "./Private";
import Sourov from "./Sourov";

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
        path: "contact",
        element: <Contact></Contact>,
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
      {
        path: "akib",
        element: <Akib></Akib>,
      },
      {
        path: "sourov",
        element: <Sourov></Sourov>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //! Admin's Routes
      {
        path: "admin-home",
        element: (
          <AdminPrivate>
            <AdminHome></AdminHome>
          </AdminPrivate>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminPrivate>
            <AllUsers></AllUsers>
          </AdminPrivate>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminPrivate>
            <ManageItems></ManageItems>
          </AdminPrivate>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminPrivate>
            <AddItems></AddItems>
          </AdminPrivate>
        ),
      },
      {
        path: "update-items/:id",
        element: (
          <AdminPrivate>
            <UpdateItems></UpdateItems>
          </AdminPrivate>
        ),
      },
      //! Users Route
      {
        path: "user-home",
        element: (
          <Private>
            <UserHome></UserHome>
          </Private>
        ),
      },
      {
        path: "my-cart",
        element: (
          <Private>
            <MyCart></MyCart>
          </Private>
        ),
      },
      {
        path: "payment",
        element: (
          <Private>
            <Payment></Payment>
          </Private>
        ),
      },
      {
        path: "payment-history",
        element: (
          <Private>
            <PaymentHistory></PaymentHistory>
          </Private>
        ),
      },
    ],
  },
]);
