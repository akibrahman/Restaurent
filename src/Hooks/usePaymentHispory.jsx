import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import useAxios from "./useAxios";

const usePaymentHispory = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/payment-history?email=${user.email}`
      );
      return response.data;
    },
  });
  return { data, isLoading, refetch };
};

export default usePaymentHispory;
