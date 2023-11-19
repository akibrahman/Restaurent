import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { AuthContext } from "./AuthProvider";

const AdminPrivate = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const { role, isLoading } = useRole();
  if (loading || isLoading) return <p>Loading.....Private Admin Route</p>;
  else if (user && role === "Admin") {
    return children;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

export default AdminPrivate;
