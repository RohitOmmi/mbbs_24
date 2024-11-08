import React from "react";
import img1 from "../Assets/academic_1.png";
import img2 from "../Assets/academic_2.png";
import img3 from "../Assets/academic_3.png";
import img4 from "../Assets/academic_4.png";
import img5 from "../Assets/academic_5.png";
import img6 from "../Assets/academic_6.png";
import img7 from "../Assets/academic_7.png";
import img8 from "../Assets/academic_8.png";
import img9 from "../Assets/academic_9.png"
import img10 from "../Assets/academic_10.png"
import Layout from "./Layout";
import Heading from "./Heading";

const Academic = () => {
  const data = [
    {
      id: 1,
      title: "Short-term training",
      description:
        "Short-term training at the Institution of National Importance for Excellence.",
      src: img1,
    },
    {
      id: 2,
      title: "Exposure & training",
      description:
        "Exposure & training in various SS departments.",
      src: img2,
    },
    {
      id: 3,
      title: "Interdisciplinary, state-of-the-art research Labs",
      description:
        "Interdisciplinary, state-of-the-art research Labs.",
      src: img5,
    },
    {
      id: 4,
      title: "Seed grants",
      description:
        "Seed grants to encourage advancement in research.",
      src: img4,
    },
    {
      id: 5,
      title: "Hands-on surgical skill training",
      description:
        "Hands-on surgical skill training",
      src: img3,
    },
    {
      id: 6,
      title: "Faculty & Student ",
      description:
        "Faculty & Student Exchange Programme Including overseas universities.",
      src: img6,
    },
    {
      id: 7,
      title: "Centre for AHA ",
      description:
        "Centre for AHA (American Heart Association) certified courses.",
      src: img7,
    },
    {
      id: 8,
      title: "ATLS ",
      description:
        "ATLS (Advanced Trauma Life Support) training cente.",
      src: img8,
    },
    {
      id: 9,
      title: "Endo Training Facility In Skill Lab",
      description: "Endo Training Facility In Skill Lab",
      src: img9,
    },
    {
      id: 10,
      title: "High-Fidelity Mannequins for Scenario-Based Training",
      description: "High-Fidelity Mannequins for Scenario-Based Training",
      src: img10,
    }
  ];

  return (
    <>
      <div className="py-10 lg:py-32">
        <Layout>
          <Heading
            title={
              "Academic Differentiators: Theory Meets Real-World Applications at GIMSR"
            }
          />
          <p className="lg:w-8/12 mx-auto text-center">
            Embark on a transformative journey at GIMSR, where theory meets
            practice through hands-on experience in our state-of-the-art labs
            and facilities, empowering healthcare professionals for excellence.
          </p>
          <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {data.map((item) => {
              if(item.id==2){
                return(
                
                  <div
                  key={item.id}
                  className="bg-white relative overflow-hidden rounded-lg border group"
                >
                  <div>
                    <div className="w-full">
                      <img src={item.src} alt={item.title} className="w-full" />
                    </div>
                    <div className="bg-[#007367] text-white py-4 text-center text-xl font-semibold md:h-24 flex items-center justify-center">
                      {item.title}
                    </div>
                  </div>
                  <div className="absolute top-full duration-300 bg-white w-full h-full text-center py-4 px-6 group-hover:top-0">
                    <div className="text-xl font-semibold text-[#007367] mb-2 mt-1">
                      {item.title}
                    </div>
                    <div className="text-sm">{item.description}
                      <ul>
                        <li>Cardiology</li>
                        <li>Neurology</li>
                        <li>Nephrology</li>
                        <li>Gastroenterology</li>
                        <li>Urology</li>
                        <li>Interventional Radiology</li>
                        <li>Plastic Surgery</li>
                        <li>Pediatrics Surgery.</li>
                      </ul>
                    </div>
                  </div>
                </div>
    
               
            )
              }
            else{
              return(
                <div
                key={item.id}
                className="bg-white relative overflow-hidden rounded-lg border group"
              >
                <div>
                  <div className="w-full">
                    <img src={item.src} alt={item.title} className="w-full" />
                  </div>
                  <div className="bg-[#007367] text-white py-4 text-center text-xl font-semibold md:h-24 flex items-center justify-center">
                    {item.title}
                  </div>
                </div>
                <div className="absolute top-full duration-300 bg-white w-full h-full text-center py-4 px-6 group-hover:top-0">
                  <div className="text-xl font-semibold text-[#007367] mb-2 mt-1">
                  {item.description}
                  </div>
                  <div className="text-xs">{item.description}</div>
                </div>
              </div>
              )
             
              
            }
              // <div
              //   key={item.id}
              //   className="bg-white relative overflow-hidden rounded-lg border group"
              // >
              //   <div>
              //     <div className="w-full">
              //       <img src={item.src} alt={item.title} className="w-full" />
              //     </div>
              //     <div className="bg-[#007367] text-white py-4 text-center text-xl font-semibold md:h-24 flex items-center justify-center">
              //       {item.title}
              //     </div>
              //   </div>
              //   <div className="absolute top-full duration-300 bg-white w-full h-full text-center py-4 px-6 group-hover:top-0">
              //     <div className="text-xl font-semibold text-[#007367] mb-2 mt-1">
              //       {item.title}
              //     </div>
              //     <div className="text-xs">{item.description}</div>
              //   </div>
              // </div>
})}
      </div>
    </Layout >
      </div >
    </>
  );
};

export default Academic;
