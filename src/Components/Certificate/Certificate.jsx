// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Certificate.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../../public/assets/Images/Certificates/Certificate - INTERNSHIP.png";
import img2 from "../../../public/assets/Images/Certificates/Certificate - HTML.png";
import img3 from "../../../public/assets/Images/Certificates/Certificate - CSS.png";
import img4 from "../../../public/assets/Images/Certificates/Certificate - JAVASCRIPT.png";
import img5 from "../../../public/assets/Images/Certificates/Certificate - REACT.png";

function Certificate() {
  return (
    <>
      <div className="main-container">
        <div className="wrapper-new">
          <div className="heading">
            <h1>Certificates</h1>
          </div>
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="slider-img">
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider-img">
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider-img">
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider-img">
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider-img">
              <img src={img5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Certificate;
