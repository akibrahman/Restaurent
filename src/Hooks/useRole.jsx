import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import useAxios from "./useAxios";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const {
    data: role,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "role"],
    queryFn: async () => {
      const responce = await axiosInstance.get(`/users/role/${user.email}`);
      return responce.data?.role;
    },
    enabled: !!user?.email,
  });
  return { role, isLoading, refetch };
};

export default useRole;
