import { getRedirectResult } from "firebase/auth";
import { useContext, useEffect } from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaSpinner } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "./AuthProvider";

const SocialLogin = ({ loading, setLoading }) => {
  const { googleLogin, auth } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const redirectResult = async () => {
    const res = await getRedirectResult(auth);
    if (res) {
      console.log(res);
      await axiosPublic.post("/users", {
        userName: res.user.displayName,
        userEmail: res.user.email,
        userRole: "General",
      });
      console.log("DB Completed after Google Login");
      navigate(`${location.state ? location.state : "/"}`);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Authorized",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    redirectResult();
  }, []);

  return (
    <div className="flex gap-8 text-[#444]">
      <FaFacebookF className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
      {loading ? (
        <FaSpinner className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-not-allowed animate-spin duration-300 select-none" />
      ) : (
        <FaGoogle
          onClick={googleLogin}
          className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90"
        />
      )}

      <FaGithub className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
    </div>
  );
};

export default SocialLogin;
