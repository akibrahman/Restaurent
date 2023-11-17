import useAllMenu from "../Hooks/useAllMenu";
import FoodCard from "./FoodCard";
import Heading from "./Heading";

const ChefRecommends = () => {
  const { items } = useAllMenu();
  //! Random Item Picker
  const getRandomItems = (array, count) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, count);
  };
  const displayItems = getRandomItems(items, 3);
  return (
    <div className="w-[70%] mx-auto">
      <Heading
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems &&
          displayItems.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
