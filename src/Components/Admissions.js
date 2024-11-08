import React from "react";
import Layout from "./Layout";
import img from "../Assets/gitam_mbbs_admissions.png";

const Admissions = () => {
  return (
    <div className="py-10 lg:py-32">
      <Layout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Postgraduate (MD/MS) Admissions 2024-2025
            </h2>
            <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify	md:text-left	">
              Take the next step in your medical career with GIMSR’s prestigious MD/MS programs! Our comprehensive curriculum
              prepares you for a rewarding medical career while fostering holistic development and immersive learning experiences. 
              <b>NEET-PG Counseling 2024</b> is conducted online by the Medical Counseling Committee (MCC), DGHS, New Delhi, for admission
              to MD/MS courses offered by Deemed Universities. Participating candidates are advised to carefully read the Information
              Bulletin, Counseling Procedure, Institute information, and Seat Matrix on the official MCC website (mcc.nic.in)
              and register for admission to MD/MS courses at GITAM Institute of Medical Sciences and Research (GIMSR),
              GITAM (Deemed to be University), Visakhapatnam.
            </p>
          </div>
          <div>
            <img src={img} alt="MBBS Admissions" className="w-full" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Admissions;
