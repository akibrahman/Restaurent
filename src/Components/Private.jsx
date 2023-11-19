import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Private = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <p>Loading.....Private Route</p>;
  else if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

export default Private;
