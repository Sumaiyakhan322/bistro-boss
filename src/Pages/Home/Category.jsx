import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import Title from "../../Shared/Title";
const Category = () => {
  return (
    <div>
        <Title heading={'ORDER ONLINE'} subHeading={'---From 11:00am to 10:00pm---'}></Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20 "
      >
        <SwiperSlide className="mb-20">
          <img src={slide1} alt="" />
          <h2 className="text-center text-white -mt-16 text-4xl uppercase ">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />{" "}
          <h2 className="text-center text-white -mt-16 text-4xl uppercase">
           Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />{" "}
          <h2 className="text-center text-white -mt-16 text-4xl uppercase">
            Soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />{" "}
          <h2 className="text-center text-white -mt-16 text-4xl uppercase">
           Cake
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />{" "}
          <h2 className="text-center text-white -mt-16 text-4xl uppercase">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
