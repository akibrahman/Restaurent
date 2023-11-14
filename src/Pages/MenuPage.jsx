import CoverBanner from "../Components/CoverBanner";

const MenuPage = () => {
  return (
    <div>
      <CoverBanner
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
        isTop={true}
      ></CoverBanner>
      <CoverBanner
        title={"PIZZA"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverBanner>
    </div>
  );
};

export default MenuPage;
