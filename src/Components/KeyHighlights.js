/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Layout from "./Layout";
import img1 from "../Assets/mbbs_icon_1.1.png";
import img2 from "../Assets/mbbs_icon_1.2.png";
import img3 from "../Assets/mbbs_icon_1.3.png";
import img4 from "../Assets/mbbs_icon_4.png";
import img5 from "../Assets/mbbs_icon_5.png";
import img6 from "../Assets/mbbs_icon_1.6.png";
// import img7 from "../Assets/mbbs_icon_7.png";
// import img8 from "../Assets/mbbs_icon_8.png";

const KeyHighlights = () => {
  const data = [
    // {
    //   id: 1,
    //   src: img1,
    //   heading: "349",
    //   subHeading: "Doctors",
    //   templte: false,
    // },
    // {
    //   id: 2,
    //   src: img2,
    //   heading: "1200",
    //   subHeading: "Average Daily Out-Patients",
    //   templte: false,
    // },
    // {
    //   id: 3,
    //   src: img3,
    //   heading: "12",
    //   subHeading: "Modular Operation Theatres",
    //   templte: false,
    // },
    //  {
    //   id: 8,
    //   src: img8,
    //   heading: "850+",
    //   subHeading: "Bedded Hospital",
    //   templte: false,
    // },
   
    {
      id: 1,
      src: img1,
      heading: "Research & Innovation",
      subHeading: "",
      templte: false,
    },
    {
      id: 2,
      src: img2,
      heading: "Simulation Skill Training Lab",
      subHeading: "",
      templte: false,
    },
    {
      id: 3,
      src: img3,
      heading: "Exposure To Superspeciality",
      subHeading: "",
      templte: false,
    },
    {
      id: 4,
      src: img4,
      heading: "NAAC A++Accredited",
      subHeading: "",
      templte: false,
    },
    {
      id: 5,
      src: img5,
      heading: "",
      subHeading: "State-of-the-art Cath Lab",
      templte: true,
    },
    {
      id: 6,
      src: img6,
      heading: "",
      subHeading: "Experimential Learning Opportunities",
      templte: true,
    },
    // {
    //   id: 6,
    //   src: img6,
    //   heading: "RT-PCR Laboratory",
    //   subHeading: "NABL Accredited and ICMR Approved",
    //   templte: false,
    // },
    // {
    //   id: 7,
    //   src: img7,
    //   heading: "Computerized ",
    //   subHeading: "High-quality NE<small>x</small>T Based Training Program",
    //   templte: false,
    // },
  ];
  return (
    <div className="bg-[#DDDDDD] py-12 md:py-32 md:pt-40 keymargin">
      <Layout>
        <h2 class="w-full text-[#004740] text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center">Key Highlights</h2>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 mt-3 md:mt-24">
          {/* <div className="bg-[#007367] h-44 sm:h-auto text-white text-2xl md:text-3xl lg:text-5xl font-bold border-2 border-[#007367] rounded-2xl grid items-center  px-4 smd:px-12">
            <h2>
              Key <br />
              Highlights
            </h2>
          </div> */}
          {data.map((data) => {
            return (
              <div
                className="bg-white text-center border-2 border-[#007367] rounded-2xl py-8"
                key={data.id}
              >
                <div className="sm:w-24 w-14 mx-auto">
                  <img src={data.src} alt={data.heading} className="w-full" />
                </div>
                {data.templte === true ? (
                  <div className="mt-2">
                    <p className="text-[#007367] text-base sm:text-lg">
                      {data.heading}
                    </p>
                    <div className="text-[#007367] text-lg sm:text-2xl font-bold">
                      {data.subHeading}
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <h4 className="text-[#007367] text-lg sm:text-2xl font-bold">
                      {data.heading}
                    </h4>
                    <div
                      className="text-[#007367] text-base sm:text-lg"
                      dangerouslySetInnerHTML={{
                        __html: data.subHeading,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default KeyHighlights;
