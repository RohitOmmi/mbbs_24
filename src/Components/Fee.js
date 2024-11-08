import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";

const Fee = () => {
  // const datapaidSeat = [
  //   {
  //     id: 1,
  //     year: 1,
  //     sub: "st",
  //     fee: "25,37,000",
  //   },
  //   {
  //     id: 2,
  //     year: 2,
  //     sub: "nd",
  //     fee: "25,37,000",
  //   },
  //   {
  //     id: 3,
  //     year: 3,
  //     sub: "rd",
  //     fee: "25,37,000",
  //   },
  //   {
  //     id: 4,
  //     year: 4,
  //     sub: "th",
  //     fee: "25,37,000",
  //   },
  //   {
  //     id: 5,
  //     year: 5,
  //     sub: "th",
  //     fee: "12,70,000",
  //   },
  // ];
  // const dataNRISeat = [
  //   {
  //     id: 1,
  //     year: 1,
  //     sub: "st",
  //     fee: "45,000",
  //   },
  //   {
  //     id: 2,
  //     year: 2,
  //     sub: "nd",
  //     fee: "45,000",
  //   },
  //   {
  //     id: 3,
  //     year: 3,
  //     sub: "rd",
  //     fee: "45,000",
  //   },
  //   {
  //     id: 4,
  //     year: 4,
  //     sub: "th",
  //     fee: "45,000",
  //   },
  //   {
  //     id: 5,
  //     year: 5,
  //     sub: "th",
  //     fee: "22,500",
  //   },
  // ];
  return (
    <div className="py-10 mb:py-32 bg-[#F4E4C9]">
      <Layout>
        <Heading title={"Fee Structure"} />
        {/* <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-24 mt-6 md:mt-0">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-7">
            <div className="sm:w-56 w-32 h-32 sm:h-56 bg-[#004740] text-white rounded-full flex items-center justify-center text-base sm:text-xl font-bold line">
              <span className="block w-10/12 mx-auto">
                Management/ <br />
                Paid Seats
              </span>
            </div>
            {datapaidSeat.map((data) => {
              return (
                <div
                  key={data.id}
                  className="sm:w-40 w-28 h-28 sm:h-40 bg-white  rounded-full flex items-center justify-center flex-col lines"
                >
                  <div>
                    <span className="block sm:mb-1">
                      {data.year}
                      <sup>{data.sub}</sup> Year
                    </span>
                    <h5 className="font-bold text-base sm:text-xl text-[#004740]">
                      ₹{data.fee}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row  justify-between items-center gap-y-7">
            <div className="sm:w-56 w-32 h-32 sm:h-56 bg-[#004740] text-white rounded-full flex items-center justify-center text-base sm:text-xl font-bold line">
              <span className="block w-10/12 mx-auto text-center">
                NRI Seats
              </span>
            </div>
            {dataNRISeat.map((data) => {
              return (
                <div
                  key={data.id}
                  className="sm:w-40 w-28 h-28 sm:h-40 bg-white  rounded-full flex items-center justify-center flex-col lines"
                >
                  <div>
                    <span className="block sm:mb-1">
                      {data.year}
                      <sup>{data.sub}</sup> Year
                    </span>
                    <h5 className="font-bold text-base sm:text-xl text-[#004740]">
                      ${data.fee}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-y-24 mt-3 md:mt-24 overflow-auto w-full">
          <table className=" border-spacing-2 border border-[#004740] border-collapse" >

            <tr>
              <th width="64"  >Program    / Course</th>
              <th width="64 "  >Total seats</th>
              <th width="64 ">Management / Paid    seats</th>
              <th width="64 " >Management / Paid    fees per annum (Rs.)</th>
              <th width="64 " >NRI seats</th>
              <th width="64 " >NRI fees per    annum (US dollars)</th>
            </tr>
            <tr className=" text-center border border-[#004740]" >
              <td width="64"  >MD - Anaesthesiology</td>
              <td width="64" className="border border-[#004740]" >6</td>
              <td width="64" className="border border-[#004740]" >6</td>
              <td width="64" className="border border-[#004740]" >29,70,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - Dermatology</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >1</td>
              <td width="64" className="border border-[#004740]" >38,50,000/-</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >$ 1,85,000</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - General Medicine</td>
              <td width="64" className="border border-[#004740]" >4</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >33,00,000/-</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >$ 1,60,000</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MS - General Surgery</td>
              <td width="64" className="border border-[#004740]" >6</td>
              <td width="64" className="border border-[#004740]" >5</td>
              <td width="64" className="border border-[#004740]" >27,50,000/-</td>
              <td width="64" className="border border-[#004740]" >1</td>
              <td width="64" className="border border-[#004740]" >$ 1,30,000</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MS - Obstetrics &amp; Gynecology</td>
              <td width="64" className="border border-[#004740]" >6</td>
              <td width="64" className="border border-[#004740]" >5</td>
              <td width="64" className="border border-[#004740]" >29,70,000/-</td>
              <td width="64" className="border border-[#004740]" >1</td>
              <td width="64" className="border border-[#004740]" >$ 1,40,000</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MS - Ophthalmology</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >27,50,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MS - Orthopedics</td>
              <td width="64" className="border border-[#004740]" >4</td>
              <td width="64" className="border border-[#004740]" >4</td>
              <td width="64" className="border border-[#004740]" >27,50,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MS - Otorhinolaryngology (ENT)</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >27,50,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - Paediatrics</td>
              <td width="64" className="border border-[#004740]" >4</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >33,00,000/-</td>
              <td width="64" className="border border-[#004740]" >1</td>
              <td width="64" className="border border-[#004740]" >$ 1,60,000</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - Pathology</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >12,00,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - Preventive &amp; Social Medicine</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >8,00,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - Psychiatry</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >22,00,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - Radio - diagnosis</td>
              <td width="64" className="border border-[#004740]" >4</td>
              <td width="64" className="border border-[#004740]" >3</td>
              <td width="64" className="border border-[#004740]" >38,50,000/-</td>
              <td width="64" className="border border-[#004740]" >1</td>
              <td width="64" className="border border-[#004740]" >$ 1,85,000</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >MD - TB &amp; Respiratory diseases</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >2</td>
              <td width="64" className="border border-[#004740]" >33,00,000/-</td>
              <td width="64" className="border border-[#004740]" >-</td>
              <td width="64" className="border border-[#004740]" >-</td>
            </tr>
          </table>
        </div>
        <div className="mt-4 mb-4 md:mt-12 md:mb-12 w-full md:w-8/12 mx-auto">
          <p>*ALL MD / MS Courses are Three years (3) duration. </p>
          <p><b>Stipend:</b>  GIMSR offers monthly stipend to all the candidates admitted into PG Medical(MD / MS) courses.</p>
        </div>
        <div className="grid grid-cols-1 gap-y-24 mt-6 md:mb-24 overflow-auto  ">
          <table className="border-collapse border-spacing-2 border border-[#004740]  " >
            <tr className="text-center ">
              <th width="64" className="border border-[#004740] bg-[#004740] text-white" >Year</th>
              <th className="border border-[#004740]" >Stipend in (Rs.)</th>
            </tr>
            <tr className="text-center">
              <td width="64"className="border border-[#004740]" >1 <sup>st</sup> Year MD / MS</td>
              <td  width="64"className="border border-[#004740]" >44,075/-</td>
            </tr>
            <tr className="text-center">
              <td width="64" className="border border-[#004740]" >2 <sup>nd</sup> Year MD / MS</td>
              <td  width="64" className="border border-[#004740]" >46,524/-</td>
            </tr>
            <tr className="text-center">
              <td  width="64" className="border border-[#004740]" >3 <sup>rd</sup> Year MD / MS</td>
              <td width="64" className="border border-[#004740]" >48,973/-</td>
            </tr>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default Fee;
