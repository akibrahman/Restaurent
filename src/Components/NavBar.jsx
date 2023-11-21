import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useRole from "../Hooks/useRole";
import { AuthContext } from "./AuthProvider";
import cart from "/icon/cart.png";
import settings from "/icon/settings.png";
import noUser from "/icon/user.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { role } = useRole();
  const { carts, isLoading } = useCart();
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-[rgba(21,21,21,0.5)] px-14 py-2 font-inter flex items-center justify-between absolute z-10 w-full">
      <div className="font-cinzel">
        <p className="text-white text-3xl font-black">Bistro Boss</p>
        <p className="text-white first-letter: text-xl font-bold tracking-[7px]">
          Restaurant
        </p>
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/">
          <p className="text-white font-bold capitalize">Home</p>
        </NavLink>
        <p className="text-white font-bold capitalize">contact us</p>
        <p className="text-white font-bold capitalize">dashboard</p>
        <NavLink to="/menu">
          <p className="text-white font-bold capitalize">our menu</p>
        </NavLink>
        <NavLink to="/shop/salad">
          <p className="text-white font-bold capitalize">our shop</p>
        </NavLink>
        {role === "Admin" ? (
          <Link to="/dashboard/admin-home">
            <img className="w-9" src={settings} alt="" />
          </Link>
        ) : (
          <Link to="/dashboard/my-cart">
            <div className="relative">
              <img className="w-12" src={cart} alt="" />
              <p className="absolute right-[2px] bottom-[2px] bg-red-600 rounded-full text-sm w-[18px] h-[18px] flex items-center justify-center">
                {user ? (isLoading ? "0" : carts.length) : "!"}
              </p>
            </div>
          </Link>
        )}

        {user ? (
          <p
            onClick={handleLogOut}
            className="text-white font-bold capitalize cursor-pointer"
          >
            Log Out
          </p>
        ) : (
          <NavLink to="/login">
            <p className="text-white font-bold capitalize">Log In</p>
          </NavLink>
        )}
        <Link
          to={
            user
              ? role === "Admin"
                ? "/dashboard/admin-home"
                : "/dashboard/user-home"
              : "/login"
          }
        >
          <img
            className="rounded-full w-10 h-10"
            src={user ? user.photoURL : noUser}
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
