"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <div style={{ padding: "50px 0" }}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Image
              src="/img/slider1.svg"
              width={200}
              height={245}
              alt="slider"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/slider1.svg"
              width={200}
              height={245}
              alt="slider"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/slider1.svg"
              width={200}
              height={245}
              alt="slider"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
