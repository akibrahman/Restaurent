import Heading from "../Components/Heading";
import HomeCarousel from "../Components/HomeCarousel";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <Heading
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></Heading>
    </div>
  );
};

export default HomePage;
