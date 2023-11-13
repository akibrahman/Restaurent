import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "./Heading";

const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("/menu.json")
      .then((res) => {
        setItems(
          res.data.filter((item) => item.category === "popular").slice(0, 6)
        );
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(items);
  return (
    <div className="w-[70%] mx-auto my-10">
      <Heading
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {items.map((item) => (
          <div className="flex justify-between gap-6" key={item._id}>
            <img
              src={item.image}
              className="w-[100px] h-[90px] rounded-full rounded-ss-none"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="text-[#151515] text-lg font-cinzel">
                {item.name}------
              </p>
              <p className="text-[#737373] font-inter text-xs">{item.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-[#1F2937] font-inter font-medium border-b-4 border-[#1F2937] px-7 py-3 rounded-lg duration-300 hover:bg-[#1F2937] hover:text-white active:scale-90">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
