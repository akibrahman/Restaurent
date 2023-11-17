import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllMenu = () => {
  const axiosInstance = useAxios();

  const { data: items = [] } = useQuery({
    queryKey: ["allMenu"],
    queryFn: async () => {
      const responce = await axiosInstance.get("/all-menu");
      return responce.data;
    },
  });

  return { items };
};
export default useAllMenu;
