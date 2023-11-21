import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaUtensils } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Heading from "../../../Components/Heading";
import useAllMenu from "../../../Hooks/useAllMenu";
import useAxios from "../../../Hooks/useAxios";

const UpdateItems = () => {
  const [preview, setPreview] = useState(null);
  const [newImageFile, setNewImageFile] = useState(null);
  const { id } = useParams();
  const { items } = useAllMenu();
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const targetItem = items.find((item) => item._id === id);

  const chooseImage = (event) => {
    const file = event.target.files[0];
    setNewImageFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const checker = async (data) => {
    return new Promise((resolve) => {
      if (data) {
        const imgData = new FormData();
        imgData.append("image", data);

        axios
          .post(
            "https://api.imgbb.com/1/upload?key=f8c09563e2c3334b8e3c08a6de7d30df",
            imgData
          )
          .then((res) => {
            resolve(res.data.data.display_url);
          });
      } else resolve(targetItem.image);
    });
  };

  const handleUpdateItem = async (data) => {
    const updatedInfo = {
      name: data.name,
      recipe: data.recipe,
      image: await checker(newImageFile),
      category: data.category,
      price: parseFloat(data.price),
    };
    const response = await axiosInstance.patch(`/all-menu/${id}`, updatedInfo);
    if (response) {
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
        title: "Item Updated",
      });
    }
  };
  if (!targetItem) return <p>Targeted Item is Loading .....</p>;

  return (
    <div>
      <Heading heading="UPDATE AN ITEM" subHeading="---Whats new?---"></Heading>
      <form
        onSubmit={handleSubmit(handleUpdateItem)}
        className="bg-[#F3F3F3] p-10 flex flex-col gap-6 w-[900px] mb-10"
      >
        <div className="flex flex-col gap-4">
          <label className="text-[#444] font-inter font-semibold">
            Recipe Name
          </label>
          <input
            defaultValue={targetItem.name}
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
              defaultValue={targetItem.category}
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
              defaultValue={targetItem.price}
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
            defaultValue={targetItem.recipe}
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
            {...register("image")}
            className="bg-transparent text-[#444] font-inter font-semibold"
            type="file"
            onChange={chooseImage}
          />
          <img
            className="w-20 rounded-md"
            src={preview || targetItem.image}
            alt=""
          />
        </div>
        <button className="text-white font-bold font-inter px-7 py-3 bg-gradient-to-r from-[#835E23] to-[#B48030] flex items-center gap-2 w-max duration-300 active:scale-90">
          Update Item <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default UpdateItems;
