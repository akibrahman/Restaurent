import { useContext, useEffect } from "react";
import {
  FaCircleExclamation,
  FaFacebookF,
  FaGithub,
  FaGoogle,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate } from "react-simple-captcha";
import { AuthContext } from "../Components/AuthProvider";
import "../Css/Login.css";
import img from "/others/login.png";

const LoginPage = () => {
  const {
    logIn,
    captchaMached,
    captchaChecker,
    captchaAlert,
    captchaEngineStarter,
    setCaptchaEngineStarter,
  } = useContext(AuthContext);
  //! Reload Captcha
  useEffect(() => {
    setCaptchaEngineStarter(!captchaEngineStarter);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    logIn();
  };
  return (
    <div className="font-inter w-full h-screen bg-[url('/others/login-bg.png')] bg-cover bg-center flex items-center justify-center">
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className="w-[85%] h-[90%] flex items-center justify-center"
      >
        <div className="flex-1">
          <img className="w-[65%] mx-auto" src={img} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="flex-1 bg-red600 flex flex-col items-center  gap-2"
        >
          <p className="text-[#151515] text-4xl font-bold">Login</p>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">
              Email
            </label>
            <input
              className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Email"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">
              Password
            </label>
            <input
              className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Password"
              type="password"
              name="password"
            />
          </div>
          <input
            className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
            placeholder=""
            type="text"
            onChange={(e) => captchaChecker(e.target.value)}
          />
          <div
            onClick={captchaChecker}
            className="w-[420px] select-none flex gap-6"
          >
            <LoadCanvasTemplate reloadColor="#D1A054" />
            {captchaAlert && (
              <span className="text-sm text-red-600 font-semibold flex items-center gap-1">
                <FaCircleExclamation /> Captcha Changed
              </span>
            )}
          </div>
          <button
            className="w-[420px] rounded-md py-3 font-semibold text-white bg-[#D1A054] duration-300 select-none cursor-pointer active:scale-90 disabled:bg-slate-300 disabled:pointer-events-none"
            disabled={!captchaMached}
          >
            Log In
          </button>
          <Link to="/registration">
            <p className="text-[#D1A054] font-medium">
              New here? <span className="font-bold">Create a New Account</span>
            </p>
          </Link>
          <p className="text-[#444] font-medium">Or sign in with</p>
          <div className="flex gap-8 text-[#444]">
            <FaFacebookF className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
            <FaGoogle className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
            <FaGithub className="rounded-full border-2 border-[#444] w-10 h-10 p-2 cursor-pointer duration-300 select-none active:scale-90" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
