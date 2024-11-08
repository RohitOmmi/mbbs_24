import React from "react";
import Layout from "./Layout";
import img from "../Assets/gimsr-image.svg";
import Heading from "./Heading";

const Footer = () => {
  const data = [
    {
      id: 1,
      name: "Prof. Narendra",
      number: "9908035979",
    },
    {
      id: 2,
      name: "Mr. Mahendra Manoj",
      number: "+91 9781517851",
    },
    {
      id: 3,
      name: "Dr. R. Ramana Rao",
      number: "+91 9848330640",
    },
  ];

  return (
    <>
      <div>
        <Layout>
          <div>
            <Heading title={"For Admissions, Contact"} />
            <div className="grid md:grid-cols-3 mb-8 md:mb-32 mt-4 md:mt-12">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-center py-4 border-adm">
                    <h4 className="text-2xl text-[#A58255] font-semibold mb-1">
                      {item.name}
                    </h4>
                    <p>{item.number}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center flex items-center flex-col gap-2 mb-2 md:mb-8">
            <img src={img} alt="gimsr logo" />
            <h3 className="font-bold text-lg">
              GITAM Institute of Medical Sciences & Research
            </h3>
            <p>
              GITAM (Deemed to be University), Rushikonda, Visakhapatnam – 530
              045.
              <br /> Andhra Pradesh, India
            </p>
          </div>
        </Layout>
        <div className="bg-[#2D2D2D] text-center py-3 text-white pb-4 text-xs md:text-base">
          © 2024 GITAM - All Rights Reserved. | Privacy Policy
        </div>
      </div>
    </>
  );
};

export default Footer;
