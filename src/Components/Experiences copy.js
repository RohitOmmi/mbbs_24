import React from "react";
import Layout from "./Layout";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// import Swiper React components;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import Swiper styles
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
        "To be eligible for MBBS admission, candidates must be at least 17 years old on or before 31st December of the admission year and have completed their intermediate / H.S.C / +2 or equivalent with English, Physics, Chemistry, and Biology/Botany & Zoology, meeting the minimum marks required by the National Medical Council (NMC). Additionally, they must qualify the undergraduate National Eligibility cum Entrance Test (NEET) with the score prescribed by the National Medical Council (NMC).",
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

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <div className="bg-[#DDDDDD] py-32">
        <Layout>
          <Heading title={"GIMSR Experiences"} />
          <div className="w-8/12 mx-auto mt-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              onSlideChange={() => console.log("swiper change")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 3000 }}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-full bg-white flex items-center p-12 rounded-lg gap-8">
                    <div className="w-[300px] bg-white feshadow rounded-lg overflow-hidden">
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
                    <div className="w-10/12 relative">
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
                      <p className="text-lg w-10/12 mx-auto relative z-10">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex absolute bottom-0 z-20">
                <div
                  ref={navigationPrevRef}
                  className="w-12 h-12 bg-[#007367] text-white text-2xl flex items-center justify-center cursor-pointer"
                >
                  <BsChevronLeft />
                </div>
                <div
                  ref={navigationNextRef}
                  className="w-12 h-12 bg-white text-[#007367] text-2xl flex items-center justify-center cursor-pointer"
                >
                  <BsChevronRight />
                </div>
              </div>
            </Swiper>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Experiences;
