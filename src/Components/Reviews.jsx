import { useQuery } from "@tanstack/react-query";
import ReactStarsRating from "react-awesome-stars-rating";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Css/Reviews.css";
import useAxios from "../Hooks/useAxios";
import Heading from "./Heading";
import quote from "/icon/review.png";

const Reviews = () => {
  const axiosInstance = useAxios();
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const responce = await axiosInstance.get("/all-reviews");
      return responce.data;
    },
  });

  return (
    <div className="w-[70%] mx-auto mb-[100px]">
      <Heading
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></Heading>
      {!isLoading ? (
        <Swiper
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center gap-6">
                <ReactStarsRating
                  id="stars"
                  primaryColor="#CD9003"
                  secondaryColor="#A1A1A1"
                  starGap={6}
                  isEdit={false}
                  value={review.rating}
                />
                <img src={quote} alt="" />
                <p className="text-[#444] font-inter text-lg leading-8 text-center w-[70%] mx-auto">
                  {review.details}
                </p>
                <p className="text-[#CD9003] text-center font-inter text-3xl font-medium">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Reviews;
