import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import useAxios from "./useAxios";

const useCart = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const {
    data: carts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: user ? true : false,
    queryFn: async () => {
      const responce = await axiosInstance.get(`/carts?email=${user.email}`);
      return responce.data;
    },
  });
  return { carts, isLoading, refetch };
};

export default useCart;
