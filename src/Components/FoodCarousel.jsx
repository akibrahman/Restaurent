import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "./Heading";
import slide1 from "/home/slide1.jpg";
import slide2 from "/home/slide2.jpg";
import slide3 from "/home/slide3.jpg";
import slide4 from "/home/slide4.jpg";
import slide5 from "/home/slide5.jpg";

const FoodCarousel = () => {
  return (
    <div className="my-10 w-[70%] mx-auto">
      <Heading
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></Heading>
      <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <p className="absolute bottom-8 left-[30%] text-white font-cinzel text-3xl">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide2} alt="" />
          <p className="absolute bottom-8 left-[30%] text-white font-cinzel text-3xl">
            Pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide3} alt="" />
          <p className="absolute bottom-8 left-[30%] text-white font-cinzel text-3xl">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide4} alt="" />
          <p className="absolute bottom-8 left-[30%] text-white font-cinzel text-3xl">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide5} alt="" />
          <p className="absolute bottom-8 left-[30%] text-white font-cinzel text-3xl">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodCarousel;
