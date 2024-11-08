import React, { useRef, useState, useEffect } from "react";
import Layout from "./Layout";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img1 from "../Assets/experiences_1.png";
import img2 from "../Assets/experiences_2.png";
import img3 from "../Assets/experiences_3.png";
import Heading from "./Heading";

const Experiences = () => {
  const data = [
    {
      id: 1,
      src: img1,
      name: "Dr. Likitha Jakkampudi",
      content:
        "My experience at GIMSR has been nothing short of amazing. The college has played a significant role in shaping me into a better person. The state-of-the-art infrastructure and meticulous maintenance leave everyone awestruck. The faculties have been exceptionally friendly and supportive, making the learning journey enjoyable and inspiring. The friendships forged here are truly special, and the memories created will be cherished forever. I am deeply grateful for the invaluable experiences and learning opportunities I received at GIMSR.",
    },
    {
      id: 2,
      src: img2,
      name: "Dr. Anoop Reddy",
      content:
        "Attending this medical college has been an incredibly enriching experience. The faculty members were exceptional, creating a supportive and interactive learning environment. The top-notch infrastructure provided the best facilities for our academic growth. The professors and doctors were knowledgeable and student-friendly, encouraging active participation and hands-on experience. These skills have given me a competitive edge in my professional life. The vibrant student life and comfortable hostels made it feel like a home away from home.",
    },
    {
      id: 3,
      src: img3,
      name: "Dr. Mortha Sai Lakshmi",
      content:
        "In 2016, I was searching for the perfect undergraduate medical college and fortunately found Gitam Institute of Medical Sciences and Research (GIMSR). The infrastructure and professors exceeded my expectations, providing a comfortable learning environment and valuable guidance. Serving thousands of COVID patients through GIMSR remains an honour. I highly recommend this college for its development of various facilities in multi-speciality and super-speciality courses, producing the finest doctors for our nation.",
    },
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (navigationPrevRef.current && navigationNextRef.current) {
      navigationPrevRef.current.addEventListener("click", () =>
        swiperRef.current?.slidePrev()
      );
      navigationNextRef.current.addEventListener("click", () =>
        swiperRef.current?.slideNext()
      );
    }
  }, [navigationPrevRef, navigationNextRef]);

  const swiperRef = useRef(null);

  return (
    <div className="bg-[#DDDDDD] py-10 lg:py-32">
      <Layout>
        <div className="w-full relative">
          <Heading title={"GIMSR Experiences"} />
          <div className="w-full lg:w-8/12 mx-auto mt-6 lg:mt-12 relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-full bg-white flex items-center p-12 rounded-lg gap-8 flex-col lg:flex-row">
                    <div className="w-full lg:w-[300px] bg-white feshadow rounded-lg overflow-hidden">
                      <div className="w-full">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="w-full"
                        />
                      </div>
                      <div className="py-3 text-center text-[#007367] font-semibold">
                        <h4>{item.name}</h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-10/12 relative">
                      <div className="w-52 absolute -top-30 left-0 opacity-10">
                        <svg
                          id="fi_7350737"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                          className="w-full h-full"
                          fill="#007367"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m4.7 17.7c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5-.7.7-1.5 1-2.5 1-1.1 0-2.1-.5-2.7-1.1zm10 0c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5s-1.5 1-2.5 1c-1.1 0-2.1-.5-2.7-1.1z"></path>
                        </svg>
                      </div>
                      <p className="text-base lg:text-lg w-full lg:w-10/12 mx-auto relative z-10 text-justify lg:text-left">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              ref={navigationPrevRef}
              className="w-12 h-12 bg-[#007367] text-white text-2xl flex items-center justify-center cursor-pointer rounded-full absolute top-1/2 z-10 -left-20"
            >
              <BsChevronLeft />
            </div>
            <div
              ref={navigationNextRef}
              className="w-12 h-12 bg-[#007367] text-white text-2xl flex items-center justify-center cursor-pointer rounded-full absolute top-1/2 z-10 -right-20"
            >
              <BsChevronRight />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Experiences;
