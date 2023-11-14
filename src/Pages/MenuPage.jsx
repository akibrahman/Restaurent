import CoverBanner from "../Components/CoverBanner";
import Heading from "../Components/Heading";
import MenuMenu from "../Components/MenuMenu";
import useAllMenu from "../Hooks/useAllMenu";

const MenuPage = () => {
  const [items] = useAllMenu();
  const todaysOffer = items.filter((item) => item.category === "offered");
  const desserts = items.filter((item) => item.category === "dessert");
  const salads = items.filter((item) => item.category === "salad");
  const pizzas = items.filter((item) => item.category === "pizza");
  const soups = items.filter((item) => item.category === "soup");
  const drinks = items.filter((item) => item.category === "drinks");
  return (
    <div>
      <CoverBanner
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
        isTop={true}
      ></CoverBanner>
      <Heading
        subHeading={"---Do not miss---"}
        heading={"Offer of the day"}
      ></Heading>
      <MenuMenu items={todaysOffer} showBtn={false}></MenuMenu>
      <CoverBanner
        title={"DESSERTS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        bg="bg-[url('/menu/dessert-bg.jpeg')]"
      ></CoverBanner>
      <MenuMenu items={desserts} category="desserts"></MenuMenu>
      <CoverBanner
        title={"PIZZA"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        bg="bg-[url('/menu/pizza-bg.jpg')]"
      ></CoverBanner>
      <MenuMenu items={pizzas} category="pizza"></MenuMenu>
      <CoverBanner
        title={"SALADS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        bg="bg-[url('/menu/salad-bg.jpg')]"
      ></CoverBanner>
      <MenuMenu items={salads} category="salad"></MenuMenu>
      <CoverBanner
        title={"Soups"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        bg="bg-[url('/menu/soup-bg.jpg')]"
      ></CoverBanner>
      <MenuMenu items={soups} category="soups"></MenuMenu>
      <CoverBanner
        title={"Drinks"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        bg="bg-[url('/menu/banner3.jpg')]"
      ></CoverBanner>
      <MenuMenu items={drinks} category="drinks"></MenuMenu>
    </div>
  );
};

export default MenuPage;
