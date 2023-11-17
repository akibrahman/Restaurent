import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import useCart from "../Hooks/useCart";
import { AuthContext } from "./AuthProvider";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { refetch } = useCart();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const addToCart = () => {
    if (user && user.email) {
      const addedItem = {
        itemId: item._id,
        customer: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      axiosInstance
        .post("/carts", addedItem)
        .then((responce) => {
          if (responce.data.acknowledged) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Order Confirmed",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "You can't add this to cart",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#BB8506",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Page",
        cancelButtonText: "Cancle",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] text-[#151515] font-inter pb-4 relative">
      <p className="absolute right-2 top-2 text-white font-inter font-semibold px-4 py-2 bg-[#111827]">
        ${item.price}
      </p>
      <img className="" src={item.image} alt="" />
      <p className="font-semibold text-2xl text-center h-[80px] flex items-center justify-center">
        {item.name}
      </p>
      <p className="text-center w-[90%] mx-auto">{item.recipe}</p>
      <button
        onClick={addToCart}
        className="text-[#BB8506] bg-[#E8E8E8] font-inter font-medium border-b-4 border-[#BB8506] px-7 py-2 rounded-lg duration-300 hover:bg-[#BB8506] hover:text-white active:scale-90 mt-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default FoodCard;
