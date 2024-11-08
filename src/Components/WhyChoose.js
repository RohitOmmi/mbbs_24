import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import img1 from "../Assets/mbbs_choose_1.png";
import img2 from "../Assets/mbbs_choose_2.png";
import img3 from "../Assets/mbbs_choose_3.png";
import img4 from "../Assets/mbbs_choose_4.png";
import img5 from "../Assets/mbbs_choose_5.png";
import img6 from "../Assets/mbbs_choose_6.png";

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      src: img1,
      content: "<p>Ensure NEET qualification for MBBS admission.</p>",
    },
    {
      id: 2,
      src: img2,
      content:
        "<p>Register online at <a>www.mcc.nic.in</a> for All India Quota (AIQ) counselling and select Deemed Medical Colleges.</p>",
    },
    {
      id: 3,
      src: img3,
      content:
        "<p>Prioritize GIMSR as your first choice during choice filling in round 1 for MBBS.</p>",
    },
    {
      id: 4,
      src: img4,
      content:
        "<p>Stay updated on All India Quota (AIQ) merit announcements at <a>www.mcc.nic.in</a></p>",
    },
    {
      id: 5,
      src: img5,
      content:
        "<p>If allotted a seat at GIMSR, download the allotment letter and complete verification and fee payment as per scheduled dates.</p>",
    },
    {
      id: 6,
      src: img6,
      content:
        "<p>In case of non-allotment, continue with subsequent counselling rounds (Round 2, Mop-up round, and stray vacancy) with GIMSR as your first preference.</p>",
    },
  ];

  return (
    <div className="py-10 md:py-32 bg-[#007367]">
      <Heading title={"How to choose GIMSR"} usertitle="true" />
      <Layout>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {data.map((item) => (
            <div
              className="bg-white rounded-lg p-6 flex gap-4 items-center choose"
              key={item.id}
            >
              <div className="w-24">
                <img src={item.src} className="w-full" alt="img" />
              </div>
              <div className="w-10/12">
                <span className="block text-[#007367] font-bold mb-1">
                  Step {item.id}
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default WhyChoose;
