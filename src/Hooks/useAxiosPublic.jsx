import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_server_side_url}`,
});
const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
