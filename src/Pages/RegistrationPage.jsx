import { Link } from "react-router-dom";
import img from "/others/login.png";

const RegistrationPage = () => {
  return (
    <div className="font-inter w-full h-screen bg-[url('/others/login-bg.png')] bg-cover bg-center flex items-center justify-center">
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className="w-[85%] h-[80%] flex flex-row-reverse items-center justify-center"
      >
        <div className="flex-1">
          <img className="w-[65%] mx-auto" src={img} alt="" />
        </div>
        <div className="flex-1 bg-red600 flex flex-col items-center gap-2">
          <p className="text-[#151515] text-4xl font-bold">Registration</p>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">
              Email
            </label>
            <input
              className="text-[#444] px-7 py-4 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Email"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">
              Password
            </label>
            <input
              className="text-[#444] px-7 py-4 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <input
            className="w-[420px] rounded-md py-3 font-semibold text-white bg-[#D1A054] duration-300 cursor-pointer active:scale-90"
            type="submit"
            value="Sign In"
          />
          <Link to="/login">
            <p className="text-[#D1A054] font-medium">
              Already have an Account?
              <span className="font-bold"> Login Here</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
