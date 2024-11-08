import React from "react";
// eslint-disable-next-line no-unused-vars
// import BannerImg1 from "../Assets/gitam_mbbs_1.png";
// import BannerImg2 from "../Assets/gitam_mbbs_2.png";
// import BannerImg3 from "../Assets/gitam_mbbs_3.png";

import newbanner1 from "../Assets/newbanner1.png"
import newbanner2 from "../Assets/newbanner2.png"


import mbimg1 from "../Assets/Frame_107_1.png"
import mbimg2 from "../Assets/Frame_108_1.png"
// import mobBannerImg1 from "../Assets/gitam_mbbs_mobile_1.jpg";
// import mobBannerImg2 from "../Assets/gitam_mbbs_mobile_2.jpg"
// import mobBannerImg3 from "../Assets/gitam_mbbs_mobile_3.jpg"


// import Swiper React components;
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  const pagination = {
    clickable: true,
  };
  const data = [
    // {
    //   id: 1,
    //   src: BannerImg1,
    //   mobSrc: mobBannerImg1,
    //   alt: "GITAM GIMSR",
    // },
    // {
    //   id: 2,
    //   src: BannerImg2,
    //   mobSrc: mobBannerImg2,
    //   alt: "GITAM GIMSR",
    // },
    // {
    //   id: 3,
    //   src: BannerImg3,
    //   mobSrc: mobBannerImg3,
    //   alt: "GITAM GIMSR",
    // },

    {
      id: 1,
      src: newbanner1,
      mobSrc: mbimg1,
      alt: "GITAM GIMSR",
    },
    {
      id: 2,
      src: newbanner2,
      mobSrc: mbimg2,
      alt: "GITAM GIMSR",
    },
  ];
  return (
    <>
      <div className="w-full sliderbanner">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={pagination}
          // pagination={true}
          // navigation
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
         onSlideChange={() => { /* your code here, if any */ }}
onSwiper={(swiper) => { /* your code here, if any */ }}
          autoplay={{ delay: 3000 }}
        >
          {data.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="w-full">
                  <picture>
                    <source media="(max-width: 640px)" srcSet={data.mobSrc} />
                    <source media="(min-width: 641px)" srcSet={data.src} />
                    <img src={data.src} alt={data.alt} className="w-full" />
                  </picture>
                  {/* <img src={data.src} alt={data.alt} className="w-full" /> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
