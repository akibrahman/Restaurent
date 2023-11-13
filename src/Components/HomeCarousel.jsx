import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "/home/01.jpg";
import slide2 from "/home/02.jpg";
import slide3 from "/home/03.jpg";
import slide4 from "/home/04.jpg";
import slide5 from "/home/05.jpg";
import slide6 from "/home/06.jpg";

const HomeCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showStatus={false}
      stopOnHover={false}
    >
      <div>
        <img src={slide1} />
      </div>
      <div>
        <img src={slide2} />
      </div>
      <div>
        <img src={slide3} />
      </div>
      <div>
        <img src={slide4} />
      </div>
      <div>
        <img src={slide5} />
      </div>
      <div>
        <img src={slide6} />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
