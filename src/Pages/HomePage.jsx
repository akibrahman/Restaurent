import CallUs from "../Components/CallUs";
import ChefRecommends from "../Components/ChefRecommends";
import Featured from "../Components/Featured";
import FoodCarousel from "../Components/FoodCarousel";
import HomeAbout from "../Components/HomeAbout";
import HomeCarousel from "../Components/HomeCarousel";
import Menu from "../Components/Menu";
import Reviews from "../Components/Reviews";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <FoodCarousel></FoodCarousel>
      <HomeAbout></HomeAbout>
      <Menu></Menu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default HomePage;
