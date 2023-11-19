import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "./AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        axiosPublic
          .post("/users", {
            userName: res.user.displayName,
            userEmail: res.user.email,
            userRole: "General",
          })
          .then((res) => {
            console.log(res);
            navigate(`${location.state ? location.state : "/"}`);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Authorized",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex gap-8 text-[#444]">
      <FaFacebookF className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
      <FaGoogle
        onClick={handleGoogleLogin}
        className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90"
      />
      <FaGithub className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
    </div>
  );
};

export default SocialLogin;
