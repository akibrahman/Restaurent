import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import img from "/others/login.png";

const RegistrationPage = () => {
  const { auth, registration } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [preview, setPreview] = useState(null);
  //! BASE64 Convertor
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleInput = async (event) => {
    const base64 = await convertBase64(event.target.files[0]);
    setPreview(base64);
  };

  const handleRegistration = (data) => {
    const imgData = new FormData();
    imgData.append("image", data.photo[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=0742e99477242ec47e48bb4c386c2a5f",
        imgData
      )
      .then((responce) => {
        //! Important
        // const photoData = {
        //   imgbbID: responce.data.data.id,
        //   fileName: responce.data.data.image.filename,
        //   url: responce.data.data.display_url,
        //   extension: responce.data.data.image.extension,
        //   type: responce.data.data.image.mime,
        //   size: (responce.data.data.size / 1000000).toFixed(3) + "MB",
        // };
        registration(data.email, data.password)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: data.name,
              photoURL: responce.data.data.display_url,
            })
              .then(() => {
                axiosPublic
                  .post("/users", {
                    userName: data.name,
                    userEmail: data.email,
                    userRole: "General",
                  })
                  .then(() => {
                    navigate(`${location.state ? location.state : "/"}`);
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Successfully Registered",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="font-inter w-full h-screen bg-[url('/others/login-bg.png')] bg-cover bg-center flex items-center justify-center">
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className="w-[85%] h-[95%] flex flex-row-reverse items-center justify-center"
      >
        <div className="flex-1">
          <img className="w-[65%] mx-auto" src={img} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="flex-1 bg-red600 flex flex-col items-center gap-2"
        >
          <p className="text-[#151515] text-4xl font-bold">Registration</p>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">Name</label>
            <input
              {...register("name", { required: true })}
              className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Name"
              type="text"
            />
            {errors.name && <span>Name is Required</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Email"
              type="text"
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
              Photo
            </label>
            <div className="flex items-center justify-center gap-2">
              <input
                {...register("photo", {
                  required: true,
                })}
                className="text-[#444] px-7 py-3 rounded-md border w-[364px] focus:outline-none bg-white"
                placeholder="Enter Email"
                type="file"
                onChange={handleInput}
              />
              <img
                className="w-12 h-12 rounded-full"
                src={preview ? preview : "/icon/user.png"}
                alt=""
              />
            </div>
            {errors.photo?.type === "required" && (
              <span>Photo is Required</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#444444] text-lg font-semibold">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/,
              })}
              className="text-[#444] px-7 py-3 rounded-md border w-[420px] focus:outline-none"
              placeholder="Enter Password"
              type="password"
            />
            {errors.password?.type === "required" && (
              <span>Password is Required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Password should be Six charectered</span>
            )}
            {errors.password?.type === "pattern" && (
              <span>Password should contain atleast one special charecter</span>
            )}
          </div>
          <input
            className="w-[420px] rounded-md py-3 font-semibold text-white bg-[#D1A054] duration-300 cursor-pointer active:scale-90"
            type="submit"
            value="Register"
          />
          <Link to="/login">
            <p className="text-[#D1A054] font-medium">
              Already have an Account?
              <span className="font-bold"> Login Here</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
