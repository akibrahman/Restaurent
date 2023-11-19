import {
  FaCalendar,
  FaCartShopping,
  FaHouse,
  FaUserGroup,
  FaWallet,
} from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";

const Dashboard = () => {
  const { role } = useRole();
  // const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open bg-[#F6F6F6]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 bg-[#D1A054] min-h-full  text-base-content font-cinzel">
          <p className="text-2xl font-black text-center">Bistro Boss</p>
          <p className="font-bold text-center tracking-[7px]">Restaurant</p>
          <div className="mt-10">
            {/* User Panel  */}
            {role === "General" && (
              <>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/dashboard/">
                    <FaHouse></FaHouse>User Home
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <FaCalendar></FaCalendar>Reservation
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <FaWallet></FaWallet>Payment History
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/dashboard/my-cart">
                    <FaCartShopping></FaCartShopping>My Cart
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <MdRateReview />
                    Add Review
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <RiReservedFill />
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}
            {/* Admin Panel  */}
            {role === "Admin" && (
              <>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <FaUserGroup />
                    Admin Home
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <FaUserGroup />
                    Add Items
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <FaUserGroup />
                    Manage Items
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/">
                    <FaUserGroup />
                    Manage Bookings
                  </NavLink>
                </li>
                <li className="text-[#151515] font-medium">
                  <NavLink to="/dashboard/all-users">
                    <FaUserGroup />
                    All Users
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider divider-warning">Main</div>
            <li className="text-[#151515] font-medium">
              <NavLink to="/">
                <FaHouse></FaHouse>Home
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
