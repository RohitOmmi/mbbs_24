import React from "react";

import Layout from "./Layout";
import img from "../Assets/gitam_mbbs_eligibility.png";

const Eligibility = () => {
  return (
    <div className="py-10 lg:py-32 pt-0">
      <Layout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <img src={img} alt="MBBS Admissions" className="w-full" />
          </div>
          <div >
            <h2 className="text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Eligibility
            </h2>
            <p className="text-base md:text-lg leading-[28px] md:leading-[32px] mt-2 md:mt-8 text-justify	md:text-left	">
            Candidates must satisfy the eligibility requirements as per the NEET PG (MD/MS) Information Bulletin - 2024 of MCC counseling and the eligibility requirements as prescribed by the National Medical Commission (NMC).
            </p>
          </div>
          <div className="block md:hidden">
            <img src={img} alt="MBBS Admissions" className="w-full" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Eligibility;
