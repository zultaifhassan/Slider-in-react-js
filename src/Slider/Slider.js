import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="outer-slider">
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-inner-content">
              <img src="/Images/user.png" alt="" />
              <h1>Hello Zultaif</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
