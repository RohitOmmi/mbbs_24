import React from "react";
import Layout from "./Layout";
import img from "../Assets/gitam_fearless.png";

const Fearless = () => {
  return (
    <>
      <div className="py-10 lg:py-32">
        <Layout>
          <div className="grid lg:grid-cols-2  gap-8 items-center">
            <div>
              <h2 className="text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                Fearless Heart: <br />
                The Story of Dr. Swathi Reddy
              </h2>
              <div className="md:hidden">
              <img src={img} alt="MBBS Admissions" className="w-full mt-4 md:mt-0" />
            </div>
              <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify	md:text-left">
                Dr. Swathi Reddy, a GIMSE alumna, embodies the spirit of empathy
                and dedication. On September 12, 2023, she answered destiny's
                call, aiding a fellow passenger in labour on a train. Armed with
                her training and resourcefulness, she facilitated a safe
                delivery, showcasing the essence of a true healer.
              </p>
              <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-1 md:mt-3 text-justify	md:text-left	">
                GIMSR's core values and Dr. Reddy's commitment converge in her
                remarkable journey. She proves that education coupled with
                compassion can create impactful moments, inspiring both her
                peers and future medical practitioners. Her story is a living
                testament to the power of education and humanity, echoing
                GIMSR's founding principles.
              </p>
            </div>
            <div className="hidden md:block">
            <img src={img} alt="MBBS Admissions" className="w-full" />
          </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Fearless;
