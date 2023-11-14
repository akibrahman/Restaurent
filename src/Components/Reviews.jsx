import axios from "axios";
import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Css/Reviews.css";
import Heading from "./Heading";
import quote from "/icon/review.png";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:1000/all-reviews")
      .then((responce) => setReviews(responce.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-[70%] mx-auto mb-[100px]">
      <Heading
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></Heading>
      {reviews && (
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
      )}
    </div>
  );
};

export default Reviews;
