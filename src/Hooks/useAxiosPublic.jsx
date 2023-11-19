import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1000",
});
const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
