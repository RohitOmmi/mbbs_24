import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";

const Scholarship = () => {
  const data = [
    {
      id: 1,
      fee: "1 - 25,000",
      scholarship: "100%",
      upto: "25,37,000",
    },
    {
      id: 2,
      fee: "25,001 - 75,000",
      scholarship: "75%",
      upto: "19,02,750",
    },
    {
      id: 3,
      fee: "75,001 - 1,50,000",
      scholarship: "50%",
      upto: "12,68,500",
    },
    {
      id: 4,
      fee: "1,50,001 - 3,00,000",
      scholarship: "25%",
      upto: "6,34,250",
    },
    {
      id: 5,
      fee: " 3,00,001 - 4,50,000",
      scholarship: "15%",
      upto: "3,80,550",
    },
    {
      id: 6,
      fee: "4,50,001 - 6,00,000",
      scholarship: "10%",
      upto: "2,53,700",
    },
  ];
  return (
    <>
      <div className="py-10 lg:py-32">
        <Layout>
          <Heading title={"Merit Scholarships for NEET 2024 Ranks"} />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-6 lg:mt-24">
            {data.map((data) => {
              return (
                <div
                  className="bg-white rounded-lg  p-6 feshadow"
                  key={data.id}
                >
                  <span className="block mb-1 md:mb-3">{data.fee}</span>
                  <h4 className="text-lg md:text-3xl text-[#007367] font-semibold block mb-2 md:mb-4">
                    Scholarship: {data.scholarship}
                  </h4>
                  <span className="">Fee Waiver up to ₹ {data.upto}</span>
                </div>
              );
            })}
          </div>
          <div className="md:w-8/12 mx-auto mt-12">
            <h6>General Terms:</h6>
            <ul className="marker:text-black list-disc pl-10 space-y-3 text-black mt-1">
              <li>
              An additional 20% scholarship will be allocated specifically for hostel fees, covering both food and accommodation.
              </li>
              <li>
              The merit scholarships will continue in the subsequent years of study (2nd, 3rd, 4th, and 5th year of MBBS), provided the student scores 65% and above aggregate marks every year.
              </li>
              <li>
              Apart from the above, the top 5% of students (subject to a maximum of seven students), who are not admitted under this merit scholarship scheme, will also be awarded a 10% scholarship in the 2nd, 3rd, 4th, and 5th year of MBBS, subject to scoring 65% and above aggregate marks every year.
              </li>
            </ul>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Scholarship;



