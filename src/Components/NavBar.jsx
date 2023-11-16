import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import cart from "/icon/cart.png";
import noUser from "/icon/user.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
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
        <img className="w-12" src={cart} alt="" />
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
        <img
          className="rounded-full w-10 h-10"
          src={user ? user.photoURL : noUser}
          alt=""
        />
      </div>
    </nav>
  );
};

export default NavBar;
