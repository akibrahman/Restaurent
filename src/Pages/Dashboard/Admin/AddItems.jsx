import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaUtensils } from "react-icons/fa6";
import Swal from "sweetalert2";
import Heading from "../../../Components/Heading";
import useAxios from "../../../Hooks/useAxios";

const AddItems = () => {
  const [preview, setPreview] = useState(null);
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const chooseImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleAddItem = async (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);
    const imgbbData = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api}`,
      imageFile
    );
    const item = {
      name: data.name,
      recipe: data.recipe,
      image: imgbbData.data.data.url,
      category: data.category,
      price: parseFloat(data.price),
    };
    console.log(item);
    const response = await axiosInstance.post("/all-menu", item);
    if (response.data.acknowledged) {
      reset();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Item Added to the Menu",
      });
    }
  };
  return (
    <div>
      <Heading heading="ADD AN ITEM" subHeading="---Whats new?---"></Heading>
      <form
        onSubmit={handleSubmit(handleAddItem)}
        className="bg-[#F3F3F3] p-10 flex flex-col gap-6 w-[900px] mb-10"
      >
        <div className="flex flex-col gap-4">
          <label className="text-[#444] font-inter font-semibold">
            Recipe Name
          </label>
          <input
            placeholder="Enter Recipe Name"
            {...register("name", { required: true })}
            className="px-7 py-4 rounded-lg focus:outline-none"
            type="text"
          />
          {errors.name && (
            <span className="text-red-600 font-semibold flex items-center gap-2">
              <FaArrowRight></FaArrowRight>
              Recipe Name is Required
            </span>
          )}
        </div>
        <div className="flex items-center gap-6">
          <div className="w-[50%] flex flex-col gap-4">
            <label className="text-[#444] font-inter font-semibold">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className="px-7 py-4 rounded-lg focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drinks</option>
              <option value="offered">Offered</option>
              <option value="popular">Popular</option>
            </select>
            {errors.category && (
              <span className="text-red-600 font-semibold flex items-center gap-2">
                <FaArrowRight></FaArrowRight>
                Category is Required
              </span>
            )}
          </div>
          <div className="w-[50%] flex flex-col gap-4">
            <label className="text-[#444] font-inter font-semibold">
              Price
            </label>
            <input
              {...register("price", { required: true })}
              placeholder="Enter Price"
              className="px-7 py-4 rounded-lg focus:outline-none"
              type="number"
            />
            {errors.price && (
              <span className="text-red-600 font-semibold flex items-center gap-2">
                <FaArrowRight></FaArrowRight>
                Price is Required
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-[#444] font-inter font-semibold">
            Recipe Details
          </label>
          <textarea
            {...register("recipe", { required: true })}
            placeholder="Enter details about the Recipe"
            className="px-7 py-4 rounded-lg focus:outline-none"
            cols="30"
            rows="10"
          ></textarea>
          {errors.recipe && (
            <span className="text-red-600 font-semibold flex items-center gap-2">
              <FaArrowRight></FaArrowRight>
              Recipe Details is Required
            </span>
          )}
        </div>
        <div className="flex items-center gap-8">
          <input
            {...register("image", { required: true })}
            className="bg-transparent text-[#444] font-inter font-semibold"
            type="file"
            onChange={chooseImage}
          />
          <img className="w-20 rounded-md" src={preview} alt="" />
        </div>
        {errors.image && (
          <span className="text-red-600 font-semibold flex items-center gap-2">
            <FaArrowRight></FaArrowRight>Image is Required
          </span>
        )}
        <button className="text-white font-bold font-inter px-7 py-3 bg-gradient-to-r from-[#835E23] to-[#B48030] flex items-center gap-2 w-max duration-300 active:scale-90">
          Add Item <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
