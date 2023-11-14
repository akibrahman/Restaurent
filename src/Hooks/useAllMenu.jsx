import axios from "axios";
import { useEffect, useState } from "react";

const useAllMenu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("/menu.json")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return [items];
};
export default useAllMenu;
