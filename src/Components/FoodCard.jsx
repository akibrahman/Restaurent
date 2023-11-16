const FoodCard = ({ item }) => {
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
      <button className="text-[#BB8506] bg-[#E8E8E8] font-inter font-medium border-b-4 border-[#BB8506] px-7 py-2 rounded-lg duration-300 hover:bg-[#BB8506] hover:text-white active:scale-90 mt-2">
        Add To Cart
      </button>
    </div>
  );
};

export default FoodCard;
