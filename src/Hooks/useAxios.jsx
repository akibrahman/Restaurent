import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_server_side_url}`,
});
const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (responce) => {
      return responce;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        console.log("Errorrrr");
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxios;
