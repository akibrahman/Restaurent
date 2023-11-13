import Heading from "./Heading";
import item1 from "/menu/dessert-bg.jpeg";
import item2 from "/menu/pizza-bg.jpg";
import item3 from "/menu/soup-bg.jpg";

const ChefRecommends = () => {
  return (
    <div className="w-[70%] mx-auto">
      <Heading
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] pb-5 text-[#151515] font-inter">
          <img className="h-full" src={item1} alt="" />
          <p className="font-semibold text-2xl">Pane Cake</p>
          <p className="text-center w-[90%] mx-auto">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets
          </p>
          <button className="text-[#BB8506] bg-[#E8E8E8] font-inter font-medium border-b-4 border-[#BB8506] px-7 py-2 rounded-lg duration-300 hover:bg-[#BB8506] hover:text-white active:scale-90 mt-6">
            Add To Cart
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] pb-5 text-[#151515] font-inter">
          <img className="h-full" src={item2} alt="" />
          <p className="font-semibold text-2xl">Pepperoni pizza</p>
          <p className="text-center w-[90%] mx-auto">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets
          </p>
          <button className="text-[#BB8506] bg-[#E8E8E8] font-inter font-medium border-b-4 border-[#BB8506] px-7 py-2 rounded-lg duration-300 hover:bg-[#BB8506] hover:text-white active:scale-90 mt-6">
            Add To Cart
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] pb-5 text-[#151515] font-inter">
          <img className="h-full" src={item3} alt="" />
          <p className="font-semibold text-2xl">Tomato Soup</p>
          <p className="text-center w-[90%] mx-auto">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets
          </p>
          <button className="text-[#BB8506] bg-[#E8E8E8] font-inter font-medium border-b-4 border-[#BB8506] px-7 py-2 rounded-lg duration-300 hover:bg-[#BB8506] hover:text-white active:scale-90 mt-6">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
