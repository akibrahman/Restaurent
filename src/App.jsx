import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  const [hideNavFooter, setHideNavFooter] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("registration")
    ) {
      setHideNavFooter(true);
    } else {
      setHideNavFooter(false);
    }
  }, [location.pathname]);
  return (
    <div className="relative">
      {hideNavFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {hideNavFooter || <Footer></Footer>}
    </div>
  );
}

export default App;
