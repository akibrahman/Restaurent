import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Akib = () => {
  const location = useLocation();
  const idData = location.search.split("?")[1].split("=")[1];

  useEffect(() => {
    // Scroll to the dynamically provided specificId
    const element = document.getElementById(idData);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [idData]);
  return (
    <div className="min-h-screen pt-20">
      <p>Akib Page</p>
      <div className="w-full h-[500px] bg-green-600" id="green"></div>
      <div className="w-full h-[500px] bg-blue-600" id="blue"></div>
      <div className="w-full h-[500px] bg-yellow-600" id="yellow"></div>
      <div className="w-full h-[500px] bg-purple-600" id="purple"></div>
    </div>
  );
};

export default Akib;
