import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CoverBanner from "../Components/CoverBanner";
import FoodCard from "../Components/FoodCard";
import "../Css/Tab.css";
import useAllMenu from "../Hooks/useAllMenu";

const ShopPage = () => {
  const currentCategory = useParams();
  const category = ["salad", "pizza", "soups", "desserts", "drinks"];
  const initialTab = category.indexOf(currentCategory.id);
  const { items } = useAllMenu();
  const salads = items.filter((item) => item.category === "salad");
  const pizzas = items.filter((item) => item.category === "pizza");
  const soups = items.filter((item) => item.category === "soup");
  const desserts = items.filter((item) => item.category === "dessert");
  const drinks = items.filter((item) => item.category === "drinks");
  return (
    <div>
      <CoverBanner
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
        isTop={true}
        bgUrl="/shop/banner2.jpg"
      ></CoverBanner>
      <div className="">
        <Tabs defaultIndex={initialTab}>
          <TabList>
            {category.map((name, index) => (
              <Tab key={index}>{name}</Tab>
            ))}
          </TabList>
          <TabPanel>
            <div className="w-[70%] mx-auto grid grid-cols-3 gap-6">
              {salads.map((salad) => (
                <FoodCard key={salad._id} item={salad}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-[70%] mx-auto grid grid-cols-3 gap-6">
              {pizzas.map((pizza) => (
                <FoodCard key={pizza._id} item={pizza}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-[70%] mx-auto grid grid-cols-3 gap-6">
              {soups.map((soup) => (
                <FoodCard key={soup._id} item={soup}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-[70%] mx-auto grid grid-cols-3 gap-6">
              {desserts.map((dessert) => (
                <FoodCard key={dessert._id} item={dessert}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-[70%] mx-auto grid grid-cols-3 gap-6">
              {drinks.map((drink) => (
                <FoodCard key={drink._id} item={drink}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopPage;
