import Heading from "./Heading";
import img from "/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-home-featured bg-fixed bg-cover bg-center my-28">
      <div className="bg-[rgba(21,21,21,0.7)]">
        <div className="w-[70%] mx-auto pb-20 pt-8">
          <Heading
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            headingColor={"#fff"}
          ></Heading>
          <div className="flex items-center gap-16">
            <img className="w-1/2" src={img} alt="" />
            <div className="flex flex-col gap-4 items-start">
              <p className="text-white font-inter text-xl leading-8 font-normal">
                March 20, 2023 <br /> WHERE CAN I GET SOME?
              </p>
              <p className="text-white font-inter text-sm leading-6 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="text-[#fff] bg-transparent font-inter font-medium border-b-4 border-[#fff] px-7 py-2 rounded-lg duration-300 hover:bg-[#fff] hover:text-inherit  active:scale-90">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
