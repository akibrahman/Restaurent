import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCircleExclamation } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Components/AuthProvider";
import SocialLogin from "../Components/SocialLogin";
import "../Css/Login.css";
import img from "/others/login.png";

const LoginPage = () => {
  const { logIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const captchaField = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  //!
  const [captchaMatched, setCaptchaMatched] = useState(false);
  const [captchaAlert, setCaptchaAlert] = useState(false);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  //!
  useEffect(() => {
    loadCaptchaEnginge(7);
  }, []);
  //!
  const captchaChecker = (event) => {
    setCaptchaMatched(false);
    if (event.target.value.length >= 7) {
      if (validateCaptcha(event.target.value) == true) {
        setCaptchaMatched(true);
        setCaptchaSuccess(true);
        setTimeout(() => {
          setCaptchaSuccess(false);
        }, 2000);
      } else {
        captchaField.current.value = "";
        setCaptchaMatched(false);
        setCaptchaAlert(true);
        setTimeout(() => {
          setCaptchaAlert(false);
        }, 2000);
      }
    }
  };
  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="flex-1 bg-red600">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className={`${
              loading ? "hidden" : "flex"
            } flex-col items-center  gap-2`}
          >
            <p className="text-[#151515] text-4xl font-bold">Login</p>
            <div className="flex flex-col gap-2">
              <label className="text-[#444444] text-lg font-semibold">
                Email
              </label>
              <input
                className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
                placeholder="Enter Email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors.email?.type === "required" && (
                <span>E-mail is Required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span>Enter Valid E-maild</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#444444] text-lg font-semibold">
                Password
              </label>
              <input
                className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
                placeholder="Enter Password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <span>Password is Required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>Wrong Invalid</span>
              )}
            </div>
            <input
              className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Captcha"
              onChange={captchaChecker}
              type="text"
              ref={captchaField}
            />
            <div
              onClick={() => {
                setCaptchaMatched(false);
                captchaField.current.value = "";
              }}
              className="w-[420px] select-none flex gap-6"
            >
              <LoadCanvasTemplate reloadColor="#D1A054" />

              {captchaAlert && (
                <span className="text-sm text-red-600 font-semibold flex items-center gap-1">
                  <FaCircleExclamation /> Captcha Changed
                </span>
              )}
              {captchaSuccess && (
                <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
                  <FaCircleExclamation /> Captcha Matched
                </span>
              )}
            </div>
            <button
              className="w-[420px] rounded-md py-3 font-semibold text-white bg-[#D1A054] duration-300 select-none cursor-pointer active:scale-90 disabled:bg-slate-300 disabled:pointer-events-none"
              disabled={!captchaMatched}
            >
              Log In
            </button>
            <Link to="/registration">
              <p className="text-[#D1A054] font-medium">
                New here?{" "}
                <span className="font-bold">Create a New Account</span>
              </p>
            </Link>
          </form>

          <div className="flex flex-col items-center justify-center gap-3 mt-3">
            <p className="text-[#444] font-medium">Or sign in with</p>
            <SocialLogin
              loading={loading}
              setLoading={setLoading}
            ></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
