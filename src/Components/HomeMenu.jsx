import { Link } from "react-router-dom";
import useAllMenu from "../Hooks/useAllMenu";
import Heading from "./Heading";

const HomeMenu = () => {
  const { items } = useAllMenu();
  const popularItems = items
    .filter((item) => item.category === "popular")
    .slice(0, 6);

  return (
    <div className="w-[70%] mx-auto my-10">
      <Heading
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {popularItems &&
          popularItems.map((item) => (
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
                <p className="text-[#737373] font-inter text-xs">
                  {item.recipe}
                </p>
              </div>
              <p className="text-[#BB8506]">${item.price}</p>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <Link to="/menu">
          {" "}
          <button className="text-[#1F2937] font-inter font-medium border-b-4 border-[#1F2937] px-7 py-3 rounded-lg duration-300 hover:bg-[#1F2937] hover:text-white active:scale-90">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeMenu;
